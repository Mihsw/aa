   let cSlide = 0
   document.getElementById('newsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value.trim()
            const message = document.getElementById('newsletterMessage')
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!emailRegex.test(email)) {
                message.textContent = 'Prosze wypełnić forum adresu email żeby zasubskrybować.'
                message.style.color = 'red'
            } else {
                message.textContent = 'Dziękujemy!'
                message.style.color = 'green'
                document.getElementById('newsletterEmail').value = ''
            }
        })

        function setSlide(index) {
            const slides = document.querySelectorAll('.slider .slide')
            const thumbs = document.querySelectorAll('.thumbnails .st')
            slides[cSlide].classList.remove('active')
            thumbs[cSlide].classList.remove('active')
            slides[index].classList.add('active')
            thumbs[index].classList.add('active')
            currentSlide = index
        }
        