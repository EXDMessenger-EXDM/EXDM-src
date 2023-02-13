from __main__ import app, flask, errorMsgs, cursor, conn, random, base64

@app.route('/auth/register', methods = ['POST'])
def auth_register():
	print(flask.request.form)
	try:
		username = flask.request.get_json(force = True)['username']
		password = flask.request.get_json(force = True)['password']
		email = flask.request.get_json(force = True)['email']
	except:
		return flask.jsonify({'code': 1, 'message': errorMsgs.code_1}), 400

	cursor.execute(f'SELECT authToken FROM users WHERE email = "{email}"')
	result = cursor.fetchone()
	if result != None:
		return flask.jsonify({'code': 17561, 'message': errorMsgs.code_auth_1}), 401
	else:
		user_id = random.randint(1, 2147483647)
		authToken1 = base64.b64encode(bytes(str(user_id) + 'x', 'utf-8')).decode('utf-8')
		authToken2 = random.randint(1, 2147483647)
		authToken3 = random.randint(1, 2147483647)
		authToken = f'{authToken1}.{authToken2}.{authToken3}'
		discriminator =  random.randint(1000, 9999)
		cursor.execute(f'INSERT INTO users VALUES ({user_id}, "{username}", "{password}", "{email}", "{authToken}", {discriminator}, 0)')
		conn.commit()
		return f'{authToken}', 200