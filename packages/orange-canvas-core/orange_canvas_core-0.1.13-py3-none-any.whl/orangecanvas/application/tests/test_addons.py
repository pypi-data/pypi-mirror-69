import unittest
from unittest.mock import patch

from AnyQt.QtWidgets import QMessageBox

from AnyQt.QtCore import QEventLoop
from orangecanvas.application import addons
from orangecanvas.gui.test import QAppTestCase
from orangecanvas.utils.qinvoke import qinvoke

from ..addons import (
    Available, Installed, Installable, Distribution, Requirement, is_updatable,
    Install, Upgrade, Uninstall,
    installable_items, installable_from_json_response,
    AddonManagerDialog)


class TestUtils(unittest.TestCase):
    def test_items_1(self):
        inst = Installable("foo", "1.0", "a foo", "", "", [])
        dist = Distribution(project_name="foo", version="1.0")
        item = Available(inst)
        self.assertFalse(is_updatable(item))

        item = Installed(None, dist)
        self.assertFalse(is_updatable(item))
        item = Installed(inst, dist)
        self.assertFalse(is_updatable(item))

        item = Installed(inst._replace(version="0.9"), dist)
        self.assertFalse(is_updatable(item))

        item = Installed(inst._replace(version="1.1"), dist)
        self.assertTrue(is_updatable(item))

        item = Installed(inst._replace(version="2.0"), dist,
                         constraint=Requirement.parse("foo<1.99"))
        self.assertFalse(is_updatable(item))
        item = Installed(inst._replace(version="2.0"), dist,
                         constraint=Requirement.parse("foo<2.99"))
        self.assertTrue(is_updatable(item))

    def test_items_2(self):
        inst1 = Installable("foo", "1.0", "a foo", "", "", [])
        inst2 = Installable("bar", "1.0", "a bar", "", "", [])
        dist2 = Distribution(project_name="bar", version="0.9")
        dist3 = Distribution(project_name="quack", version="1.0")
        items = installable_items([inst1, inst2], [dist2, dist3])
        self.assertIn(Available(inst1), items)
        self.assertIn(Installed(inst2, dist2), items)
        self.assertIn(Installed(None, dist3), items)

    def test_installable_from_json_response(self):
        inst = installable_from_json_response({
            "info": {
                "name": "foo",
                "version": "1.0",
            },
            "releases": {
                "1.0": [
                    {
                        "filename": "aa.tar.gz",
                        "url": "https://examples.com",
                        "size": 100,
                        "packagetype": "sdist",
                    }
                ]
            },
        })
        self.assertTrue(inst.name, "foo")
        self.assertEqual(inst.version, "1.0")


class TestAddonManagerDialog(QAppTestCase):
    def test_widget(self):
        items = [
            Installed(
                Installable("foo", "1.1", "", "", "", []),
                Distribution(project_name="foo", version="1.0"),
            ),
            Available(
                Installable("q", "1.2", "", "", "", [])
            ),
            Installed(
                None,
                Distribution(project_name="a", version="0.0")
            ),
        ]
        w = AddonManagerDialog()
        w.setItems(items)
        _ = w.items()
        state = w.itemState()
        self.assertSequenceEqual(state, [])
        state = [(Install, items[1])]
        w.setItemState(state)
        self.assertSequenceEqual(state, w.itemState())
        state = state + [(Upgrade, items[0])]
        w.setItemState(state)
        self.assertSequenceEqual(state, w.itemState()[::-1])
        state = [(Uninstall, items[0])]
        w.setItemState(state)
        self.assertSequenceEqual(state, w.itemState())
        updateTopLayout = w._AddonManagerDialog__updateTopLayout
        updateTopLayout(False)
        updateTopLayout(True)

    def test_run_query(self):
        w = AddonManagerDialog()

        query_res = [
            addons._QueryResult("uber-pkg", None),
            addons._QueryResult(
                "unter-pkg", Installable("unter-pkg", "0.0.0", "", "", "", []))
        ]

        def query(names):
            return query_res

        with patch.object(QMessageBox, "exec_", return_value=QMessageBox.Ok), \
             patch.object(addons, "query_pypi", query):
            f = w.runQueryAndAddResults(
                ["uber-pkg", "unter-pkg"],
            )
            loop = QEventLoop()
            f.add_done_callback(qinvoke(lambda f: loop.quit(), loop))
            loop.exec()
            items = w.items()
            self.assertEqual(items, [Available(query_res[1].installable)])
