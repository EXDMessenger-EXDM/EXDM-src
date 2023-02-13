# Copyright DragonFire Community 2021-2023
#
# Main file to start EXDMessenger
#
# Written by:
# - DragonFire

import flask

import config
import errorMsgs

import sqlite3

import random
import string

import base64

# import psycopg2 # pip3 install psycopg2-binary
# print(requests.get('http://127.0.0.1:5000/api/auth/login', json={'pon': 'os'}).text)

app = flask.Flask(__name__, template_folder='webapp')

conn = sqlite3.connect('database-main.db', check_same_thread=False)
cursor = conn.cursor()

import routes.auth.login
import routes.auth.register

import routes.users.me

import routes.server.messages
import routes.server.send

@app.route('/app')
async def app_page():
    return flask.render_template('app.html')

@app.route('/login')
async def login():
    return flask.render_template('login.html')

@app.route('/assets/<path:path>')
async def assets(path):
    return flask.send_from_directory('webapp\\assets', path), 200 #, {'Content-Type': 'text/javascript; charset=utf-8'}

@app.route('/generate_key')
async def gen_key():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=2048)), 200

# @app.before_request
# def before_request():
# 	print(flask.request.path)
# 	if flask.request.path.startswith('/api'):
# 		try:
# 			authToken = flask.request.cookies['AuthToken']
# 		except:
# 			return flask.jsonify({'code': 17563, 'message': errorMsgs.code_auth_3}), 401

# 		cursor.execute(f'SELECT authToken FROM users WHERE authToken = "{authToken}"')
# 		if len(cursor.fetchall()) == 0:
# 			return flask.jsonify({'code': 17563, 'message': errorMsgs.code_auth_3}), 401

app.run(debug = config.debug)