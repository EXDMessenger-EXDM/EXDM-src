let previousAuthor = "";

class Channel {
    static openAndParse(channel_idnew) {
        window.CHANNEL_ID = channel_idnew;
        xhttp.open("GET", `/api/server/messages`)

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                //document.getElementById('messages').innerHTML = `<h3>${response['username']}</h3><p>Статус скоро появится</p>`;
                chat.innerHTML = "";
                for (var dmNum in response) {
                    if (response[dmNum][1] == previousAuthor) {
                        chat.innerHTML = chat.innerHTML + `
                        <div class="message">
                            <p id="status-1">${response[dmNum][3]}</p>
                        </div>`;
                    }
                    else {
                        chat.innerHTML = chat.innerHTML + `
                        <div class="message">
                            <h2>${response[dmNum][1]}</h2>
                            <p id="status-1">${response[dmNum][3]}</p>
                        </div>`;
                    }
                    previousAuthor = response[dmNum][1]
                }
                previousAuthor = "";
            }
        }

        xhttp.send();

        setTimeout(function() {Channel.openAndParse(window.CHANNEL_ID)}, 1000);
    }

    static sendMessage() {
        let messageInputValue = document.getElementById('message_type_box').value;

        xhttp_channel_send.open("POST", `/api/server/send`);
        xhttp_channel_send.setRequestHeader("Content-type", "application/json");
        xhttp_channel_send.send(JSON.stringify({
            "message": messageInputValue,
            "authorName": window.authorName
        }));
    }
}