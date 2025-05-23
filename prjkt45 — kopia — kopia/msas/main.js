function setThemeFromCookie() {
    let theme = getCookie('theme')
        const themeLink = document.createElement('link')
        themeLink.rel = 'stylesheet'
    let currentUrl = window.location.href
        if (theme == null) { 
           theme = 'Theme13'
        }
        if (currentUrl.includes('games/')) {
            themeLink.href = `../../msas/themes/${theme}.css`
        }else{
            themeLink.href = `/msas/themes/${theme}.css`
        }
        document.head.appendChild(themeLink)
}
setThemeFromCookie()




    function back() {
    let currentUrl = window.location.href
        if (document.referrer==''|| document.referre==currentUrl) { 
            window.location.href = 'home.html'
        } else { 
            window.history.back()
        }
    }
    function getCookie(name) {
        const cookies = document.cookie.split(';')
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.startsWith(`${name}=`)) {
                return decodeURIComponent(cookie.substring(name.length + 1))
            }
        }
        return null;
    }
    function loadData() {
        const data = getCookie('dane')
        return data ? JSON.parse(data) : { users: [] }}

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
    document.head.appendChild(link)


function updateUserPoints() {
    const data = loadData()
    const loggedInUser = getCookie('loggedInUser')
    if (!loggedInUser) {
        document.getElementById('user-points').textContent = '0'
        return}
    const user = data.users.find(user => user.username === loggedInUser)
    if (user) {
        document.getElementById('user-points').textContent = user.points
    } else {
        console.error('User not found in data:', loggedInUser)
        document.getElementById('user-points').textContent = '0'}
}
function saveData(data) {
    setCookie('dane', JSON.stringify(data), 356)
}
function setCookie(name, value, days) {
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = `expires=${date.toUTCString()}`
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`
}
function addPointsToLoggedInUser(points) {
    const loggedInUser = getCookie('loggedInUser')
    if (!loggedInUser) {
        return 'Brak zalogowanego użytkownika!'
    }

    const data = loadData()
    const user = data.users.find(user => user.username === loggedInUser)
    if (user) {
        user.points += points
        saveData(data)
        updateUserPoints()
        return `${points} punktów dodano do ${loggedInUser}. Łączna liczba punktów: ${user.points}`
    }
    return 'Nie znaleziono użytkownika!'
}

updateUserPoints()



