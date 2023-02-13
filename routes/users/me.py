from __main__ import app, cursor, flask

@app.route('/api/users/@me')
async def api_users_me():
    authToken = flask.request.cookies['auth_token']
    cursor.execute(f'SELECT id, username, email, discriminator, boostLevel FROM users WHERE authToken = "{authToken}"')
    user = cursor.fetchone()
    try:
      id = user[0]
      username = user[1]
      email = user[2]
      discriminator = user[3]
    except:
      return 'Login required', 401

    jsonReturn = {
      'id': id,
      'username': username,
      'email': email,
      'discriminator': discriminator
	  }

    return flask.jsonify(jsonReturn), 200