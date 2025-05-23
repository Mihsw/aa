document.addEventListener("DOMContentLoaded", function(){
        const heading = document.getElementById("studyHeading")
        const boldText = document.createElement("strong")
        boldText.textContent = heading.textContent
        const newP = document.createElement("p")
        newP.appendChild(boldText)
        heading.parentNode.replaceChild(newP, heading)
        newP.classList.add("study-tips")
        console.log(document.querySelector("p"))
        console.log(document.getElementsByTagName("p"))
        console.log(document.querySelectorAll("p"))
        document.querySelector("p").id = 'p'
        console.log(document.getElementById("p"))
        document.getElementById("p").classList.add('p')
        })

document.addEventListener("DOMContentLoaded", function(){
        const list = document.querySelector("section ul")
        const item1 = document.createElement("li")
        const item2 = document.createElement("li")
        const item3 = document.createElement("li")
        const item4 = document.createElement("li")
        item1.textContent = "Znajdź grupę wsparcia"
        list.appendChild(item1)
        item2.textContent = "Zkorzystaj z pomodoro"
        list.appendChild(item2)
        item3.textContent = "Zrób testy próbne"
        list.appendChild(item3)
        item4.textContent = "Obejrzyj filmy edukacyjne"
        list.appendChild(item4)
        const listItems = document.querySelectorAll("section ul li")
        let x = listItems[1].textContent
        listItems[1].textContent = listItems[2].textContent
        listItems[2].textContent = x
            })