from __main__ import app, flask, cursor, errorMsgs

@app.route('/auth/login', methods = ['POST'])
def auth_login():
	try:
		username = flask.request.get_json(force = True)['username']
		password = flask.request.get_json(force = True)['password']
	except:
		return flask.jsonify({'code': 1, 'message': errorMsgs.code_1}), 400

	cursor.execute(f'SELECT authToken FROM users WHERE username = "{username}" AND password = "{password}"')
	result = cursor.fetchone()
	if result == None:
		return flask.jsonify({'code': 17562, 'message': errorMsgs.code_auth_2}), 401
	else:
		return str(result[0]), 200

@app.route('/auth/login/token/<token>', methods = ['GET'])
def auth_login_token(token):
    resp = flask.make_response(flask.render_template('login_in_progress.html'))
    resp.set_cookie('auth_token', token)
    return resp