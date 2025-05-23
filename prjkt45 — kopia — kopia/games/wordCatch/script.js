const canvas = document.getElementById('game-canvas')
        const ctx = canvas.getContext('2d')
        ctx.font = "20px Arial"

        const words = [
            { en: 'dog', pl: 'pies' },
            { en: 'cat', pl: 'kot' },
            { en: 'house', pl: 'dom' },
            { en: 'tree', pl: 'drzewo' },
            { en: 'bird', pl: 'ptak' },
            { en: 'car', pl: 'samochód' },
            { en: 'computer', pl: 'komputer' },
            { en: 'apple', pl: 'jabłko' },
            { en: 'book', pl: 'książka' },
            { en: 'sun', pl: 'słońce' },
            { en: 'moon', pl: 'księżyc' },
            { en: 'water', pl: 'woda' },
            { en: 'flower', pl: 'kwiat' },
            { en: 'river', pl: 'rzeka' },
            { en: 'mountain', pl: 'góra' },
            { en: 'forest', pl: 'las' },
            { en: 'road', pl: 'droga' },
            { en: 'city', pl: 'miasto' },
            { en: 'village', pl: 'wioska' },
            { en: 'rain', pl: 'deszcz' },
            { en: 'cloud', pl: 'chmura' },
            { en: 'snow', pl: 'śnieg' },
            { en: 'wind', pl: 'wiatr' },
            { en: 'fire', pl: 'ogień' },
            { en: 'earth', pl: 'ziemia' },
            { en: 'sky', pl: 'niebo' },
            { en: 'music', pl: 'muzyka' },
            { en: 'love', pl: 'miłość' },
            { en: 'hope', pl: 'nadzieja' },
            { en: 'friend', pl: 'przyjaciel' },
            { en: 'family', pl: 'rodzina' },
            { en: 'school', pl: 'szkoła' },
            { en: 'work', pl: 'praca' },
            { en: 'game', pl: 'gra' },
            { en: 'window', pl: 'okno' },
            { en: 'door', pl: 'drzwi' },
            { en: 'table', pl: 'stół' },
            { en: 'chair', pl: 'krzesło' },
            { en: 'pen', pl: 'długopis' },
            { en: 'paper', pl: 'papier' },
            { en: 'bottle', pl: 'butelka' },
            { en: 'phone', pl: 'telefon' },
            { en: 'clock', pl: 'zegar' },
            { en: 'letter', pl: 'list' },
            { en: 'grass', pl: 'trawa' },
            { en: 'sand', pl: 'piasek' },
            { en: 'ocean', pl: 'ocean' },
            { en: 'lake', pl: 'jezioro' },
            { en: 'birdsong', pl: 'śpiew ptaków' },
            { en: 'smile', pl: 'uśmiech' },
            { en: 'dream', pl: 'sen' },
            { en: 'story', pl: 'opowieść' },
            { en: 'journey', pl: 'podróż' },
            { en: 'candle', pl: 'świeca' },
            { en: 'mirror', pl: 'lustro' },

            { en: 'bicycle', pl: 'rower' },
            { en: 'smoke', pl: 'dym' },
            { en: 'island', pl: 'wyspa' },
            { en: 'desert', pl: 'pustynia' },
            { en: 'coffee', pl: 'kawa' },
            { en: 'orange', pl: 'pomarańcza' },
            { en: 'banana', pl: 'banan' },
            { en: 'grape', pl: 'winogrono' },
            { en: 'lemon', pl: 'cytryna' },
            { en: 'strawberry', pl: 'truskawka' },
            { en: 'blueberry', pl: 'borówka' },
            { en: 'tea', pl: 'herbata' },
            { en: 'chocolate', pl: 'czekolada' },
            { en: 'cake', pl: 'ciasto' },
        { en: 'bridge', pl: 'most' },
        { en: 'garden', pl: 'ogród' },
        { en: 'rainbow', pl: 'tęcza' },
        { en: 'volcano', pl: 'wulkan' },
        { en: 'star', pl: 'gwiazda' },
        { en: 'comet', pl: 'kometa' },
        { en: 'planet', pl: 'planeta' },
        { en: 'galaxy', pl: 'galaktyka' },
        { en: 'universe', pl: 'wszechświat' },
        { en: 'raincoat', pl: 'płaszcz przeciwdeszczowy' },
        { en: 'boots', pl: 'kalosze' },
        { en: 'scarf', pl: 'szalik' },
        { en: 'gloves', pl: 'rękawiczki' },
        { en: 'hat', pl: 'kapelusz' },
        { en: 'jacket', pl: 'kurtka' },
        { en: 'socks', pl: 'skarpetki' },
        { en: 'shoes', pl: 'buty' },
        { en: 'umbrella', pl: 'parasol' },
        { en: 'pencil', pl: 'ołówek' },
        { en: 'eraser', pl: 'gumka' },
        { en: 'notebook', pl: 'zeszyt' },
        { en: 'backpack', pl: 'plecak' }
        ]

        let score = 0
        let currentTarget = null
        const activeWords = []

        function setNewTarget() {
            currentTarget = words[Math.floor(Math.random() * words.length)]
            document.getElementById('target-polish').textContent = currentTarget.pl
        }


        function spawnWord() {
            const wordObj = words[Math.floor(Math.random() * words.length)]

            const text = wordObj.en;
            const textWidth = ctx.measureText(text).width
            const x = Math.random() * (canvas.width - textWidth)
            const y = Math.random() * (canvas.height - 60)
            activeWords.push({ word: wordObj, x, y, createdAt: Date.now() })
        }


        canvas.addEventListener('click', function(e) {
            const rect = canvas.getBoundingClientRect()
            const clickX = e.clientX - rect.left
            const clickY = e.clientY - rect.top


            for (let i = activeWords.length - 1; i >= 0; i--) {
                const item = activeWords[i]
                const text = item.word.en
                const metrics = ctx.measureText(text)
                const width = metrics.width
                const height = 20

                if (
                    clickX >= item.x && clickX <= item.x + width &&
                    clickY >= item.y - height && clickY <= item.y
                ) {
                    if (item.word.en === currentTarget.en) {
                        score++
                        document.getElementById('score').textContent = score
                        if (score % 5 === 0) {
                            alert(`Gratulacje! Masz już ${score} punktów!`)
                            addPointsToLoggedInUser(1)
                            if (score % 15 === 0) {
                                addPointsToLoggedInUser(2)
                            }
                        }   
                        activeWords.splice(i, 1)
                        setNewTarget()
                        break
                    }
                }
            }
        });


        function update() {
            const now = Date.now()
            for (let i = activeWords.length - 1; i >= 0; i--) {
                if (now - activeWords[i].createdAt > 10000) {
                    activeWords.splice(i, 1)
                }
            }
        }


        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = "black"
            activeWords.forEach(item => {
                ctx.fillText(item.word.en, item.x, item.y)
            });
        }

        function gameLoop() {
            update()
            draw()
            requestAnimationFrame(gameLoop)
        }

        setNewTarget()
        setInterval(spawnWord, 200)
        gameLoop()