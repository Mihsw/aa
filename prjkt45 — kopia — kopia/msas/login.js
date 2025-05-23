    function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

function register(username, password) {
    const data = loadData()
    if (data.users.find(user => user.username === username)) {
        return 'Użytkownik już istnieje!'
    }
    data.users.push({ username, password, points: 0, achievements: [] })
    saveData(data)
    return 'Rejestracja zakończona sukcesem!'
}


function login(username, password) {
    const data = loadData();
    const user = data.users.find(user => user.username === username && user.password === password)
    if (user) {
        setCookie('loggedInUser', username, 7)
         return `Witaj ponownie, ${username}!`
    }
    return 'Nieprawidłowa nazwa użytkownika lub hasło!'
}


function logout() {
    deleteCookie('loggedInUser')
    return 'Wylogowano pomyślnie!'
}


function addAchievement(username, achievement) {
    const data = loadData();
    const user = data.users.find(user => user.username === username)
    if (user) {
        user.achievements.push(achievement)
        saveData(data);
        return `Osiągnięcie "${achievement}" dodano do ${username}.`
    }
    return 'Nie znaleziono użytkownika!'
}

        function toggleForm() {
            const loginForm = document.getElementById('login-form')
            const registerForm = document.getElementById('register-form')
            const logoutForm = document.getElementById('logout-form')
            const loggedInUser = getCookie('loggedInUser')

            if (loggedInUser) {
                loginForm.style.display = 'none'
                registerForm.style.display = 'none'
                logoutForm.style.display = 'block'
            } else {
                loginForm.style.display = 'block'
                registerForm.style.display = 'none'
                logoutForm.style.display = 'none'
            }
        }
        function toggleFormRL() {
            const loginForm = document.getElementById('login-form')
            const registerForm = document.getElementById('register-form')
            if (loginForm.style.display === 'none') {
                loginForm.style.display = 'block'
                registerForm.style.display = 'none'
            } else {
                loginForm.style.display = 'none'
                registerForm.style.display = 'block'
            }
        }

        function handleLogin() {
            const username = document.getElementById('login-username').value
            const password = document.getElementById('login-password').value
            const result = window.login(username, password)
            alert(result)
            toggleForm()
        }

        function handleRegister() {
            const username = document.getElementById('register-username').value
            const password = document.getElementById('register-password').value
            if (password == document.getElementById('register-password2').value) {
            const result = window.register(username, password)
            window.login(username, password)
            alert(result)
            toggleForm()
            }
            else{alert('Hasła nie są takie same')}
        }

        function handleLogout() {
            const result = window.logout()
            alert(result)
            toggleForm()
        }

        function getCookie(name) {
            const cookies = document.cookie.split(';')
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim()
                if (cookie.startsWith(`${name}=`)) {
                    return decodeURIComponent(cookie.substring(name.length + 1))
                }
            }
            return null
        }



window.register = register
window.login = login
window.logout = logout
window.addPointsToLoggedInUser = addPointsToLoggedInUser
window.addAchievement = addAchievement
window.getCookie = getCookie