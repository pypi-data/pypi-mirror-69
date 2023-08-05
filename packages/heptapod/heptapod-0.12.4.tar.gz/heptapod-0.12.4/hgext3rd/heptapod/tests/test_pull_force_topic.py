# Copyright 2019-2020 Georges Racinet <georges.racinet@octobus.net>
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2 or any later version.
#
# SPDX-License-Identifier: GPL-2.0-or-later
from __future__ import absolute_import
import pytest
from mercurial import (
    error,
    node,
)
from heptapod.testhelpers import (
    LocalRepoWrapper,
    make_ui,
    )
from ..topic import (
    change_topic,
    cleanup_tmp_bundle,
    )
from .utils import common_config


def make_main_repo(path):
    """Make repo with 2 public revs; return wrapper, ctx of rev 0

    The returned ctx is for the first changeset because we'll use it as
    a branching point, hence more often than the second.
    """
    config = common_config()
    config['phases'] = dict(publish=False)
    wrapper = LocalRepoWrapper.init(path, config=config)

    ctx = wrapper.write_commit('foo', content='foo0', message="default0",
                               return_ctx=True)
    wrapper.write_commit('foo', content='foo1', message="default1")
    wrapper.set_phase('public', ['.'])
    return wrapper, ctx


def test_force_draft(tmpdir):
    """Case where the remote changesets are public."""
    main_path = tmpdir.join('main')
    fork_path = tmpdir.join('fork')

    main, base_ctx = make_main_repo(main_path)

    fork = LocalRepoWrapper.init(fork_path)
    fork.command('pull', str(main_path), rev=[base_ctx.hex()])
    fork_node = fork.write_commit('bar', content='bar1', message="in fork 1",
                                  parent=base_ctx.node())
    fork.set_phase('public', ['.'])

    code = main.command('pull-force-topic', 'zetop',
                        source=str(fork_path), rev=[node.hex(fork_node)])
    assert code == 0

    # TODO better lookup ?
    imported = main.repo['tip']
    assert imported.topic() == 'zetop'  # implied draft
    assert imported.description() == 'in fork 1'


def test_empty_pull(tmpdir):
    """Case where the pull turns out to be empty.

    See also heptapod#169
    """
    main_path = tmpdir.join('main')
    fork_path = tmpdir.join('fork')

    main, base_ctx = make_main_repo(main_path)

    fork = LocalRepoWrapper.init(fork_path)
    fork.command('pull', str(main_path), rev=[base_ctx.hex()])
    fork_node = fork.write_commit('bar', content='bar1', message="in fork 1",
                                  parent=base_ctx.node())
    fork.set_phase('public', ['.'])

    main.command('pull', source=str(fork_path))
    code = main.command('pull-force-topic', 'zetop',
                        source=str(fork_path), rev=[node.hex(fork_node)])
    assert code == 1


def test_change_topic_sanity(tmpdir):
    wrapper, base_ctx = make_main_repo(tmpdir)
    repo = wrapper.repo

    # early validation:
    with pytest.raises(error.Abort) as exc_info:
        wrapper.command('pull-force-topic', ' ')
    assert 'entirely of whitespace' in exc_info.value.args[0]

    with pytest.raises(error.Abort) as exc_info:
        wrapper.command('pull-force-topic', 'tip')
    assert 'reserved' in exc_info.value.args[0]

    # inner check done in transaction
    with pytest.raises(error.Abort) as exc_info:
        change_topic(repo.ui, repo, 'sometopic', [base_ctx.node()])
    assert 'public' in exc_info.value.args[0]


def test_cleanup_tmp_bundle_exc(tmpdir):
    ui = make_ui(None)

    path = tmpdir.join('bundle')

    # no file at given path
    cleanup_tmp_bundle(ui, None, str(path))

    path.write('foo')
    # close fails (of course, fobj is None)
    cleanup_tmp_bundle(ui, None, str(path))


def test_already_obsolete(tmpdir):
    """Case where a remote changeset is locally obsolete

    This can happen in practice if two remote pulls are stacked and
    we already pulled one, making it actually obsolete because of the
    topic forcing.
    """
    main_path = tmpdir.join('main')
    fork_path = tmpdir.join('fork')

    main = make_main_repo(main_path)[0]
    amended = main.write_commit('foo', content='foo2', return_ctx=True)

    fork = LocalRepoWrapper.init(fork_path)
    fork.command('pull', str(main_path), rev=[amended.hex()])

    main_path.join('foo').write('amended')
    main.command('amend', message="required in CI environment")

    main.command('pull-force-topic', 'zetop',
                 source=str(fork_path), rev=[amended.hex()])


def test_overlapping(tmpdir):
    """Case where two intersection pull_force_topic are called.

    this is heptapod#226, with at changeset part of several PRs
    """
    main_path = tmpdir.join('main')
    # actually we could use just one source, but it would be
    # less clear at first sight
    fork1_path = tmpdir.join('fork1')
    fork2_path = tmpdir.join('fork2')

    main, base_ctx = make_main_repo(main_path)

    fork1 = LocalRepoWrapper.init(fork1_path)
    fork1.command('pull', str(main_path), rev=[base_ctx.hex()])
    fork1_node = fork1.write_commit('bar', content='bar1', message="in fork 1",
                                    parent=base_ctx.node())
    fork1.set_phase('public', ['.'])

    fork2 = LocalRepoWrapper.init(fork2_path)
    fork2.command('pull', str(fork1_path), rev=[node.hex(fork1_node)])
    fork2_node = fork2.write_commit('bar', content='bar2', message="in fork 2",
                                    branch='other',
                                    parent=fork1_node)
    fork2.set_phase('public', ['.'])

    code = main.command('pull-force-topic', 'zetop',
                        source=str(fork1_path), rev=[node.hex(fork1_node)])
    assert code == 0

    imported1 = main.repo['tip']
    assert imported1.topic() == 'zetop'  # implied draft
    assert imported1.description() == 'in fork 1'

    code = main.command('pull-force-topic', 'othertop',
                        source=str(fork2_path), rev=[node.hex(fork2_node)])
    assert code == 0

    # TODO better lookup ?
    imported2 = main.repo['tip']
    assert imported2.topic() == 'othertop'  # implied draft
    assert imported2.description() == 'in fork 2'

    assert not imported1.instabilities()
    assert not {'content-divergent', 'phase-divergent'}.intersection(
        imported2.instabilities())


def test_non_obsolete_revs(tmpdir):
    repo_path = tmpdir.join('repo')
    wrapper, base_ctx = make_main_repo(repo_path)
    amended = wrapper.write_commit('foo', content='foo2')

    repo_path.join('foo').write('amended')
    wrapper.command('amend', message="required in CI environment")

    from hgext3rd.heptapod.topic import non_obsolete_revs
    assert list(non_obsolete_revs(wrapper.repo,
                                  [base_ctx.node(), amended])
                ) == [0]
