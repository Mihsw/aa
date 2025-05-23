        document.getElementById('clear-cookies').addEventListener('click', () => {
            document.cookie.split('; ').forEach(cookie => {
                const name = cookie.split('=')[0]
                document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            })
            alert('Cookies cleared.')
            document.getElementById('theme-selector').value = 'Theme13'
            setThemeFromCookie()
        })

        document.getElementById('download-cookies').addEventListener('click', () => {
            const cookies = document.cookie;
            if (cookies) {
                const cookieObject = {}
                cookies.split('; ').forEach(cookie => {
                    const [name, value] = cookie.split('=')
                    cookieObject[decodeURIComponent(name)] = decodeURIComponent(value)
                });

                const jsonString = JSON.stringify(cookieObject, null, 2)
                const blob = new Blob([jsonString], { type: 'application/json' })
                const url = URL.createObjectURL(blob)

                const a = document.createElement('a')
                a.href = url
                a.download = 'cookies.json'
                a.click()

                URL.revokeObjectURL(url)
            } else {
                alert('No cookies found to download.')
            }
        })

        document.getElementById('upload-cookies').addEventListener('click', () => {
            document.getElementById('upload-json').click()
        })

        document.getElementById('upload-json').addEventListener('change', (event) => {
            const file = event.target.files[0]
            if (!file) {
                alert('Please select a JSON file.')
                return
            }

            const reader = new FileReader()
            reader.onload = function (event) {
                try {
                    const cookieObject = JSON.parse(event.target.result)

                    document.cookie.split('; ').forEach(cookie => {
                        const name = cookie.split('=')[0]
                        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
                    })

                    for (const [name, value] of Object.entries(cookieObject)) {
                        document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/;`
                    }

                    alert('Cookies have been updated.')
                } catch (error) {
                    alert('Invalid JSON file.')
                }
            }

            reader.readAsText(file)
        })

        document.getElementById('theme-selector').addEventListener('change', (event) => {
            const selectedTheme = event.target.value
            const themes = {
                Theme1, Theme2, Theme3, Theme4, Theme5,
                Theme6, Theme7, Theme8, Theme9, Theme10,
                Theme11, Theme12, Theme13
            }
        })




        const themeSelector = document.getElementById('theme-selector');
        const themes = {
            Theme1: { '--main-color': '#f02d00' },
            Theme2: { '--main-color': '#e06005' },
            Theme3: { '--main-color': '#faae00' },
            Theme4: { '--main-color': '#70f005' },
            Theme5: { '--main-color': '#00f050' },
            Theme6: { '--main-color': '#209020' },
            Theme7: { '--main-color': '#00f07a' },
            Theme8: { '--main-color': '#00ecef' },
            Theme9: { '--main-color': '#0089ef' },
            Theme10: { '--main-color': '#9428dc' },
            Theme11: { '--main-color': '#ba25dc' },
            Theme12: { '--main-color': '#d3101f' },
            Theme13: { '--main-color': '#000000' }
        }


        Object.keys(themes).forEach(theme => {
            const option = document.querySelector(`#theme-selector option[value="${theme}"]`)
            if (option) {
                option.style.backgroundColor = themes[theme]['--main-color']
                option.style.color = '#fff'
            }
        })


        themeSelector.addEventListener('change', (event) => {
            const selectedTheme = event.target.value
            document.cookie = `theme=${selectedTheme}; path=/;`
            setThemeFromCookie()
        })


        const savedTheme = document.cookie.split('; ').find(row => row.startsWith('theme='))?.split('=')[1]
        if (savedTheme && themes[savedTheme]) {
            themeSelector.value = savedTheme
        }