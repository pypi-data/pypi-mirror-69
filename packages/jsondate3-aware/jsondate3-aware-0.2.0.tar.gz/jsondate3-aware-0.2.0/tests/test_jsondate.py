from __future__ import absolute_import

import datetime
import json
import unittest

import iso8601
import six

import jsondate3

StringIO = six.moves.cStringIO


class JSONDateTests(unittest.TestCase):
    def assertTypeAndValue(self, expected_type, expected_value, result):
        self.assertIsInstance(result, expected_type)
        self.assertEqual(expected_value, result)

    def test_dumps_empty_roundtrips(self):
        self.assertEqual({}, jsondate3.loads(jsondate3.dumps({})))

    def test_dumps_str_roundtrips(self):
        # Generates a ValueError from _datetime_object_hook
        orig_dict = dict(foo="bar")
        self.assertEqual(
            orig_dict, jsondate3.loads(jsondate3.dumps(orig_dict))
        )

    def test_dump_unicode_roundtrips(self):
        orig_dict = {u"foo": u"bar", "empty": u""}
        # json module broken: unicode objects, empty-string objects are str
        result = json.loads(json.dumps(orig_dict))
        self.assertTypeAndValue(six.text_type, u"bar", result[u"foo"])
        self.assertTypeAndValue(six.text_type, "", result[u"empty"])

        # jsondate fix: always return unicode objects
        result = jsondate3.loads(jsondate3.dumps(orig_dict))
        self.assertTypeAndValue(six.text_type, u"bar", result[u"foo"])
        self.assertTypeAndValue(six.text_type, u"", result[u"empty"])

    def test_dumps_none_roundtrips(self):
        # Generates a TypeError from _datetime_object_hook
        orig_dict = dict(foo=None)
        self.assertEqual(
            orig_dict, jsondate3.loads(jsondate3.dumps(orig_dict))
        )

    def test_dumps_datetime_roundtrips(self):
        orig_dict = dict(
            created_at=datetime.datetime(2011, 1, 1, tzinfo=iso8601.UTC)
        )
        new_dict = jsondate3.loads(jsondate3.dumps(orig_dict))
        self.assertEqual(orig_dict, new_dict)

    def test_dumps_datetime_pst_roundtrip(self):
        orig_dict = dict(
            created_at=datetime.datetime(
                2011, 1, 1, tzinfo=iso8601.FixedOffset(9, 0, "PST")
            )
        )
        new_dict = jsondate3.loads(jsondate3.dumps(orig_dict))
        self.assertEqual(orig_dict, new_dict)

    def test_dumps_date_roundtrips(self):
        orig_dict = dict(created_at=datetime.date(2011, 1, 1))
        self.assertEqual(
            orig_dict, jsondate3.loads(jsondate3.dumps(orig_dict))
        )

    def test_dumps_old_datetime_roundtrip(self):
        orig_dict = dict(
            created_at=datetime.datetime(1899, 1, 1, tzinfo=iso8601.UTC)
        )
        new_dict = jsondate3.loads(jsondate3.dumps(orig_dict))
        self.assertEqual(orig_dict, new_dict)

    def test_dumps_old_date_roundtrip(self):
        orig_dict = dict(created_at=datetime.date(1899, 1, 1))
        self.assertEqual(
            orig_dict, jsondate3.loads(jsondate3.dumps(orig_dict))
        )

    def test_dumps_datelike_string_does_not_roundtrip(self):
        """A string that looks like a date *will* be interpreted as a date.

        If for whatever reason, you don't want that to happen, yo'll need to
        do some pre or post-processing to fixup the results.
        """
        orig_dict = dict(created_at="2011-01-01")
        expected = dict(created_at=datetime.date(2011, 1, 1))
        self.assertEqual(expected, jsondate3.loads(jsondate3.dumps(orig_dict)))

    def test_dump_datetime_roundtrips(self):
        orig_dict = dict(created_at=datetime.date(2011, 1, 1))
        fileobj = StringIO()
        jsondate3.dump(orig_dict, fileobj)
        fileobj.seek(0)
        self.assertEqual(orig_dict, jsondate3.load(fileobj))

    def test_unexpected_type_raises(self):
        dict_ = {"foo": set(["a"])}
        with self.assertRaises(TypeError):
            jsondate3.dumps(dict_)
