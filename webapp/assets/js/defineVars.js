window.WEBAPP_ENDPOINT = 'http://' + window.location.hostname;
window.chat = document.getElementById('messages');
window.channels = document.getElementById('channels');

// Init XMLHttpRequest
// Used for HTTP requests
window.xhttp = new XMLHttpRequest()
window.xhttp.withCredentials = true;

window.xhttp_channel_send = new XMLHttpRequest()
window.xhttp_channel_send.withCredentials = true;

document.getElementById("message_type_box").onkeydown = function(e) {
    if (e.keyCode == 13) {
        if (document.getElementById("message_type_box").value == "") { return; }
            
        Channel.sendMessage();
        //document.getElementById('files').innerHTML = "";
        document.getElementById("message_type_box").value = "";
    }
}