# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import os
import logging
import shutil
import tempfile


class ArchiveHelper(object):
    """Helper class to facilitate the creation of course archives to be
    imported into Open edX Studio."""

    def __init__(self, root_directory, base_name):
        # The only format currently supported by Open edX Studio is
        # gztar, i.e. a gzip-compressed tarball. If that ever changes,
        # we can easily support others (via shutil.make_archive()).
        self.base_name = base_name
        self.root_directory = root_directory
        self.format = 'gztar'
        logging.info("Creating %s archive from %s" % (self.format,
                                                      self.root_directory))

    def copy_files(self, destdir):
        # We currently don't functionally distinguish between files
        # and directories that are essential, and those that are
        # (probably?) not.
        directories = [
            # apparently essential:
            'about',
            'chapter',
            'html',
            'info',
            'policies',
            'sequential',
            'static',
            # apparently not essential:
            'assets',
            'conditional',
            'course',
            'drafts',
            'library_content',
            'markdown',
            'problem',
            'tabs',
            'vertical',
            'video',
        ]
        files = [
            # apparently essential:
            'course.xml',
        ]
        for d in directories:
            source = os.path.join(self.root_directory, d)
            if os.path.exists(source):
                logging.debug("Adding directory %s" % source)
                dest = os.path.join(destdir, 'course', d)
                shutil.copytree(source, dest,
                                symlinks=True)
            else:
                logging.debug("Skipping directory %s (not found)" % source)
        for f in files:
            source = os.path.join(self.root_directory, f)
            if os.path.exists(source):
                logging.debug("Adding file %s" % source)
                dest = os.path.join(destdir, 'course', f)
                shutil.copy2(source, dest)
            else:
                logging.debug("Skipping file %s (not found)" % source)

    def make_archive(self):
        # When dropping Python 2 support, this should be turned into
        # using TemporaryFile as a content manager.
        tempdir = tempfile.mkdtemp()
        self.copy_files(destdir=tempdir)
        filename = shutil.make_archive(self.base_name,
                                       self.format,
                                       root_dir=tempdir,
                                       base_dir='course')
        logging.info("Created archive: %s" % filename)
        shutil.rmtree(tempdir)
        return filename
