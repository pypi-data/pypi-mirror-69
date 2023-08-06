from __future__ import unicode_literals

import logging
from subprocess import check_output, CalledProcessError


class GitHelperException(Exception):
    pass


class GitHelper(object):

    BRANCH_FORMAT = "run/%s"

    def __init__(self, run):
        self.run = run
        self.branch = self.BRANCH_FORMAT % run
        self.old_branch = None

    def _git_command(self, args):
        command = "git %s" % args
        logging.debug("+ %s" % command)
        return check_output(command, shell=True).strip()

    def create_branch(self):
        if self.branch_exists():
            message = (
                "The target git branch already exists.  "
                "Please delete it and try again."
            )
            raise GitHelperException(message.format(self.branch))

        try:
            self.old_branch = self._git_command("rev-parse --abbrev-ref HEAD")
        except CalledProcessError:
            # No previously existing HEAD; this is a fresh
            # repository with no commits.
            pass
        try:
            self._git_command("checkout -b {}".format(self.branch))
        except CalledProcessError:
            raise GitHelperException('Error creating '
                                     'branch {}'.format(self.branch))

    def branch_exists(self):
        try:
            self._git_command("rev-parse -q --verify {}".format(self.branch))
        except CalledProcessError:
            return False

        return True

    def is_checkout_dirty(self):
        try:
            # "git status --porcelain" returns output if the checkout
            # is dirty, i.e. has uncommitted or un-added changes. If
            # the checkout is clean, it returns the empty string.
            output = self._git_command('status --porcelain')
            if output:
                return True
        except CalledProcessError:
            raise GitHelperException('Error running git status.')
        return False

    def add_to_branch(self):
        # Git add the changed files and commit them.
        try:
            self._git_command("add .")
            self._git_command("commit -m 'New run: {}'".format(self.run))
        except CalledProcessError:
            raise GitHelperException('Error committing new run.')
        message = (
            "\n"
            "To push this new branch upstream, run:\n"
            "\n"
            "$ git push -u origin {s.branch}\n"
            "\n"
            "To switch back to {s.old_branch}, run:\n"
            "\n"
            "$ git checkout {s.old_branch}\n"
        ).format(s=self)
        logging.warn(message)
