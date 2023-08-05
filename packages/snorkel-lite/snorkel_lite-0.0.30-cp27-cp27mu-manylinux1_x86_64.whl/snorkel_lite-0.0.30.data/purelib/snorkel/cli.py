from __future__ import print_function
from __future__ import absolute_import
# TODO: put flask CLI commands in here.
import importlib
import sys
import os

import click
from flask import Flask
from getpass import getpass

from .web import app
from .models import User, UserToken

try: input = raw_input
except NameError: pass

from flask_security.utils import encrypt_password, verify_password

def _add_user(name):
    dir = os.path.join(os.path.dirname(__file__), "..", "src")
    sys.path.append(dir)

    from .models import User

    print("Adding user '%s'" % name)

    try:
        user = User.get(User.email == name)
        print("User '%s' already exists" % name)
    except User.DoesNotExist:
        pw = getpass()

        user = User.create(email=name, password=encrypt_password(pw))
        user.save()
        print("Created user", name)

@app.cli.command()
@click.argument('name')
def add_user(name):
    _add_user(name)


def _add_superuser(name):
    from flask_security.datastore import PeeweeUserDatastore
    from .models import User, Role, UserRoles, userdb


    user_datastore = PeeweeUserDatastore(userdb, User, Role, UserRoles)
    try:
        user = User.get(User.email == name)
        print("User '%s' already exists" % name)

        while True:
            r = input("Make user a superuser? [y/N]").lower()
            if r == "y":
                role = user_datastore.find_or_create_role(name='superuser')
                user_datastore.add_role_to_user(user, role)
                user.save()
                print("Set user '%s' to superuser" % name)
                break
            elif r == "n":
                break


    except User.DoesNotExist:
        pw = getpass()
        user = User.create(username=name, email=name, password=pw, roles=['superuser'])
        role = user_datastore.find_role('superuser')
        if not role:
            user_datastore.find_or_create_role(name='superuser')
        user.save()
        print("Created user", name)

@app.cli.command()
@click.argument('name')
def add_superuser(name):
    _add_superuser(name)

def _get_user_token(name):
    try:
        user = User.get(User.email == name)
        print(user.get_auth_token())

    except User.DoesNotExist:
        print("No such user '%s'" % name)

@app.cli.command()
@click.argument('name')
def get_user_token(name):
    _get_user_token(name)
