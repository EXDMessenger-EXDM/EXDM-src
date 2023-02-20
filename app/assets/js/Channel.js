let previousAuthor = "";

class Channel {
    static openAndParse(channel_idnew) {
        window.CHANNEL_ID = channel_idnew;
        xhttp.open("GET", `/api/channels/messages.php?channel_id=${window.CHANNEL_ID}`)

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                //document.getElementById('messages').innerHTML = `<h3>${response['username']}</h3><p>Статус скоро появится</p>`;
                chat.innerHTML = "";
                for (var dmNum in response) {
                    if (response[dmNum]['author_name'] == previousAuthor) {
                        chat.innerHTML = chat.innerHTML + `
                        <div class="message">
                            <p id="status-1">${response[dmNum]['content']}</p>
                        </div>`;
                    }
                    else {
                        chat.innerHTML = chat.innerHTML + `
                        <div class="message">
                            <h2>${response[dmNum]['author_name']}</h2>
                            <p id="status-1">${response[dmNum]['content']}</p>
                        </div>`;
                    }
                    previousAuthor = response[dmNum]['author_name'];
                }
                previousAuthor = "";
            }
        }

        xhttp.send();

        setTimeout(function() {Channel.openAndParse(window.CHANNEL_ID)}, 1000);
    }

    static sendMessage() {
        let messageInputValue = document.getElementById('message_type_box').value;

        xhttp_channel_send.open("POST", `/api/channels/send.php?channel_id=${window.CHANNEL_ID}`);
        xhttp_channel_send.setRequestHeader("Content-type", "application/json");
        xhttp_channel_send.send(JSON.stringify({
            "message": messageInputValue,
            "authorName": window.authorName
        }));
    }
}