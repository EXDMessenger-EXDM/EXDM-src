xhttp.open("GET", `/api/users/@me`)

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 401) {
        window.location.href = '../login'
    }
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById('profileOpenMy').innerHTML = `<h3>${response['username']}</h3><p>Статус скоро появится</p>`;
        window.authorName = response['username'];
    }
}

xhttp.send()