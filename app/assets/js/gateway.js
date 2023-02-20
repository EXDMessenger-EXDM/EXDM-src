window.socket = new WebSocket(window.GATEWAY_ENDPOINT);

socket.addEventListener('open', (event) => {
    socket.send('HELLO');
});
socket.addEventListener('message', (event) => {
    console.log('[socket] ', event.data);
    var gateway_message = event.data;
    if (gateway_message == 'TYPING_START') {
        //console.log('[socket] Typing event');
        document.getElementById('message_type_box').placeholder = "Кто-то печатает...";
    }
    if (gateway_message == 'TYPING_END') {
        document.getElementById('message_type_box').placeholder = "Напишите что нибудь в чат!";
    }
});