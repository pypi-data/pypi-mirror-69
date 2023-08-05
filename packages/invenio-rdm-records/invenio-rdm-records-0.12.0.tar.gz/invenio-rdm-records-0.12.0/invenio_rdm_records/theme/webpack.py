# -*- coding: utf-8 -*-
#
# Copyright (C) 2020 CERN.
# Copyright (C) 2020 Northwestern University.
#
# Invenio RDM Records is free software; you can redistribute it and/or modify
# it under the terms of the MIT License; see LICENSE file for more details.

"""JS/CSS Webpack bundles for theme."""

from flask_webpackext import WebpackBundle


def theme():
    """Returns module's webpack bundle.

    This is a callable function in order to lazy load `current_app`
    and avoid working outside application context.
    """
    return WebpackBundle(
        __name__,
        'assets',
        entry={
            'invenio-rdm-records-theme':
                './scss/invenio_rdm_records/theme.scss',
            'invenio-rdm-records-js': './js/invenio_rdm_records/rdmrecords.js',
        },
        dependencies={
            'jquery': '3.1.0'
        }
    )
