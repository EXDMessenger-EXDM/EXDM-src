xhttp.open("GET", `/api/user.php?user=@me`)

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 401) {
        window.location.href = '../app/login.html'
    }
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        document.getElementById('profileOpenMy').innerHTML = `<h3>${response['username']}</h3><p>Статус скоро появится</p>`;
        window.authorName = response['username'];
        for (var dmNum in response['dmList']) {
            channels.innerHTML = channels.innerHTML + `
            <div class="direct-message" onclick="Channel.openAndParse('${response['dmList'][dmNum]['id']}')">
                <h3>${response['dmList'][dmNum]['username']}</h3>
                <p id="status-1">${response['dmList'][dmNum]['status']}</p>
            </div>`;
        }
    }
}

xhttp.send()