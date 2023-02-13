from __main__ import app, flask, cursor, conn, errorMsgs, random

@app.route('/api/server/send', methods = ['POST'])
def auth_server_channelid_send():
    data = flask.request.json
    message = data['message'].replace('\n', '<br>')
    authorName = data['authorName']
    message_id = random.randint(1, 2147483647)

    cursor.execute(f'INSERT INTO messages VALUES({message_id}, "{authorName}", {random.randint(1, 2147483647)}, "{message}", 0)')
    conn.commit()

    return flask.jsonify({'message': 'ok'}), 200