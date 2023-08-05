# Copyright 2019 Georges Racinet <georges.racinet@octobus.net>
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2 or any later version.
#
# SPDX-License-Identifier: GPL-2.0-or-later
from __future__ import absolute_import
from mercurial import (
    error,
    extensions,
    phases,
    ui as uimod,
)
from os.path import dirname
import pytest

from ..testhelpers import (
    LocalRepoWrapper,
    NULL_ID,
    NULL_REVISION,
    )
import hgext3rd.heptapod

HGEXT_HEPTA_SOURCE = dirname(hgext3rd.heptapod.__file__)


parametrize = pytest.mark.parametrize


def test_init_write_commit(tmpdir):
    wrapper = LocalRepoWrapper.init(tmpdir)
    node = wrapper.write_commit('foo', content='Foo', message='Foo committed')
    ctx = wrapper.repo[node]
    assert ctx.description() == 'Foo committed'
    parents = ctx.parents()
    assert len(parents) == 1
    assert parents[0].rev() == NULL_REVISION
    assert parents[0].node() == NULL_ID

    del wrapper, ctx

    reloaded = LocalRepoWrapper.load(tmpdir)
    rl_ctx = reloaded.repo[node]
    assert rl_ctx.description() == 'Foo committed'


def assert_is_hepta_ext(hepta_ext):
    assert hepta_ext is not None
    # it's imported with a different name, hence can't be directly compared
    # let's also avoid flakiness due to __file__ behaviour depending on
    # installation context
    assert hepta_ext.__doc__ == hgext3rd.heptapod.__doc__


def test_load_hgrc_extension(tmpdir):
    LocalRepoWrapper.init(tmpdir)
    tmpdir.join('.hg', 'hgrc').write('\n'.join((
        "[extensions]",
        "heptapod=" + HGEXT_HEPTA_SOURCE,
    )))
    wrapper = LocalRepoWrapper.load(tmpdir, config=dict(foo=dict(bar='17')))
    exts = dict(extensions.extensions(wrapper.repo.ui))
    assert_is_hepta_ext(exts.get('heptapod'))

    assert wrapper.repo.ui.configint('foo', 'bar') == 17


def test_init_baseui_config_extension(tmpdir):
    ui = uimod.ui.load()
    ui.setconfig('foo', 'bar', 'yes', source='tests')
    ui.setconfig('extensions', 'heptapod', HGEXT_HEPTA_SOURCE, source='tests')
    wrapper = LocalRepoWrapper.init(tmpdir, base_ui=ui)

    assert wrapper.repo.ui.configbool('foo', 'bar')
    exts = dict(extensions.extensions(wrapper.repo.ui))
    assert_is_hepta_ext(exts.get('heptapod'))


def test_init_config_extension(tmpdir):
    ui = uimod.ui.load()
    ui.setconfig('foo', 'bar', 'yes', source='tests')
    ui.setconfig('extensions', 'heptapod', HGEXT_HEPTA_SOURCE, source='tests')
    wrapper = LocalRepoWrapper.init(
        tmpdir,
        config=dict(foo=dict(bar='yes'),
                    extensions=dict(heptapod=HGEXT_HEPTA_SOURCE),
                    ))

    assert wrapper.repo.ui.configbool('foo', 'bar')
    exts = dict(extensions.extensions(wrapper.repo.ui))
    assert_is_hepta_ext(exts.get('heptapod'))


def test_update(tmpdir):
    wrapper = LocalRepoWrapper.init(tmpdir)
    wrapper.write_commit('foo', content='Foo 0')
    node1 = wrapper.write_commit('foo', content='Foo 1')
    foo = tmpdir.join('foo')
    assert foo.read() == 'Foo 1'

    wrapper.update('0')
    assert foo.read() == 'Foo 0'

    wrapper.update_bin(NULL_ID)
    assert not foo.isfile()

    wrapper.update_bin(node1)
    assert foo.read() == 'Foo 1'


@parametrize('meth', ['class', 'instance'])
def test_share(tmpdir, meth):
    main_path = tmpdir.join('main')
    dest_path = tmpdir.join('dest')
    main_wrapper = LocalRepoWrapper.init(main_path)
    node0 = main_wrapper.write_commit('foo', message='Done in main')

    if meth == 'class':
        dest_wrapper = LocalRepoWrapper.share_from_path(main_path, dest_path)
    else:
        dest_wrapper = main_wrapper.share(dest_path)

    dest_ctx = dest_wrapper.repo[node0]
    assert dest_ctx.description() == 'Done in main'

    node1 = dest_wrapper.write_commit(
        'foo', message='Done in dest', parent=node0)

    # we need to reload the main repo to see the new changeset
    reloaded = LocalRepoWrapper.load(main_path)
    main_ctx = reloaded.repo[node1]
    assert main_ctx.description() == 'Done in dest'


def test_write_commit_named_branch(tmpdir):
    """Demonstrate the use of write_commit with parent."""
    wrapper = LocalRepoWrapper.init(tmpdir)
    node0 = wrapper.write_commit('foo', content='Foo 0')
    wrapper.write_commit('foo', content='Foo 1')
    nodebr = wrapper.write_commit('foo', content='Foo branch',
                                  parent=node0, branch='other')

    ctxbr = wrapper.repo[nodebr]
    assert ctxbr.branch() == 'other'
    assert [c.node() for c in ctxbr.parents()] == [node0]


def test_write_commit_topic(tmpdir):
    """Demonstrate the use of write_commit with parent."""
    # it is essential to activate the rebase extension, even though
    # we don't use it in this test, because the
    # first loading of topic patches it only if it is present.
    # without this, all subsequent tests expecting rebase to preserve
    # topics would be broken
    wrapper = LocalRepoWrapper.init(tmpdir,
                                    config=dict(extensions=dict(rebase='',
                                                                topic='')))

    node0 = wrapper.write_commit('foo', content='Foo 0')
    wrapper.write_commit('foo', content='Foo 1')
    nodetop = wrapper.write_commit('foo', content='Foo branch',
                                   parent=node0, topic='sometop')

    ctxbr = wrapper.repo[nodetop]
    assert ctxbr.topic() == 'sometop'
    assert [c.node() for c in ctxbr.parents()] == [node0]


def test_write_commit_wild_branch(tmpdir):
    """Demonstrate the use of write_commit with parent."""
    wrapper = LocalRepoWrapper.init(tmpdir)
    node0 = wrapper.write_commit('foo', content='Foo 0')
    wrapper.write_commit('foo', content='Foo 1')
    nodebr = wrapper.write_commit('foo', content='Foo branch',
                                  parent=node0)

    ctxbr = wrapper.repo[nodebr]
    assert ctxbr.branch() == 'default'
    assert [c.node() for c in ctxbr.parents()] == [node0]


def test_write_commit_random(tmpdir):
    """Demonstrate how random content is generated."""

    wrapper = LocalRepoWrapper.init(tmpdir)
    node0 = wrapper.write_commit('foo')
    ctx1 = wrapper.write_commit('foo', parent=node0, return_ctx=True)
    ctx2 = wrapper.write_commit('foo', parent=node0, return_ctx=True)

    assert ctx1.p1() == ctx2.p1()
    assert ctx1 != ctx2


def test_phase(tmpdir):
    wrapper = LocalRepoWrapper.init(tmpdir)
    node = wrapper.write_commit('foo', content='Foo 0')
    ctx = wrapper.repo[node]
    assert ctx.phase() == phases.draft

    wrapper.set_phase('public', ['.'], force=False)
    assert ctx.phase() == phases.public

    wrapper.set_phase('draft', ['.'], force=True)
    assert ctx.phase() == phases.draft


def test_prune_update_hidden(tmpdir):
    wrapper = LocalRepoWrapper.init(tmpdir,
                                    config=dict(extensions=dict(evolve='')))
    wrapper.write_commit('foo', content='Foo 0')
    ctx = wrapper.write_commit('foo', content='Foo 1', return_ctx=True)
    wrapper.prune('.')
    assert ctx.obsolete()

    wrapper.update(0)
    assert tmpdir.join('foo').read() == 'Foo 0'

    with pytest.raises(error.FilteredRepoLookupError):
        wrapper.update(ctx.hex())

    wrapper.update_bin(ctx.node(), hidden=True)
    assert tmpdir.join('foo').read() == 'Foo 1'
