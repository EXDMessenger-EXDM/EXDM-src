from __main__ import app, flask, cursor, errorMsgs

@app.route('/api/server/messages', methods = ['GET'])
def auth_server_channelid_messages():
    cursor.execute(f'SELECT * FROM messages')
    result = cursor.fetchall()
    return result, 200