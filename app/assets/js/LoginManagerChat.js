var chat = document.getElementById('messages');

class LoginManagerChat {
    static login() {
        // chat.innerHTML = chat.innerHTML + `
        // <div class="message">
        //     <p>Хорошо!<p>
        //     <p>Ниже ты увидешь важные поля для входа. Введи туда данные от своего аккаунта, и нажми "Войти"</p><br>
        //     <input type="text" placeholder="Почта или номер телефона"><br><br>
        //     <input type="password" placeholder="Пароль"><br><br>
        //     <button>Войти</button>
        //     <button onclick="LoginManagerChat.loginByToken()">Я хочу войти через свой токен</button>
        // </div>
        // `

        // TODO: Login
    }
    static loginByToken() {
        window.location.href = `../../api/auth/login_by_token.php?token=${document.getElementById('tokenInput').value}`;
    }

    static login() {
        document.getElementById('login-card-content').style = `transition: all 0.20s ease-in; opacity: 0;`;
        setTimeout(function() {
            // visiblity: hidden;
            document.getElementById('login-card-content').hidden = true;
        }, 200)

        setTimeout(function() {
            document.getElementById('login-card-content').hidden = false;
            document.getElementById('login-card-content').style = `transition: all 0.20s ease-in; opacity: 1;`;
            document.getElementById('login-card-content').innerHTML = `
            <input type="password" placeholder="Токен" id="tokenInput"><br><br>
            <button onclick="LoginManagerChat.loginByToken()">Войти</button>
            <button onclick="LoginManagerChat.register()">У меня нету аккаунта</button>
            `
        }, 300)
    }

    static register() {
        document.getElementById('login-card-content').style = `transition: all 0.20s ease-in; opacity: 0;`;
        setTimeout(function() {
            // visiblity: hidden;
            document.getElementById('login-card-content').hidden = true;
        }, 200)

        setTimeout(function() {
            document.getElementById('login-card-content').hidden = false;
            document.getElementById('login-card-content').style = `transition: all 0.20s ease-in; opacity: 1;`;
            document.getElementById('login-card-content').innerHTML = `
            <form action="../auth/register.php" method="POST">
                <input type="text" placeholder="Юзернейм" name="username"><br><br>
                <input type="text" placeholder="Почта (Необязательно)" name="email"><br><br>
                <input type="submit" value="Зарегистрироваться" class="registerButton"></input>
            </form>
            <button onclick="LoginManagerChat.login()">У меня есть аккаунт</button>
            `
        }, 300)
    }
}