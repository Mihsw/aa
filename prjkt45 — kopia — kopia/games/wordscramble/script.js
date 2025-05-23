(function() {

    function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get(param)
    }
    

    function initWordScrambleGame(words) {
    const scrambledWordElement = document.getElementById("scrambled-word")
    const guessInput = document.getElementById("guess-input")
    const checkBtn = document.getElementById("check-btn")
    const message = document.getElementById("message")
    const resetBtn = document.getElementById("reset-btn")

    let currentWordIndex = 0;
    
    function scrambleWord(word) {
        scrambledWord = word.split('').sort(() => Math.random() - 0.5).join('')
        if (scrambledWord === word) {
            return scrambleWord(word)
        }
            return scrambledWord
}
    function loadWord() {
        currentWordIndex = Math.floor(Math.random() * words.length)

      const chosenWord = words[currentWordIndex]
      let scrambledWord = scrambleWord(chosenWord)



      scrambledWordElement.textContent = scrambledWord
      guessInput.value = ""
      message.textContent = ""
      resetBtn.classList.add("hidden")
    }

    checkBtn.addEventListener("click", () => {
      handleCheck();
    });

    guessInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        handleCheck();
      }
    });

    function handleCheck() {
      const chosenWord = words[currentWordIndex]
      if (guessInput.value.toLowerCase() === chosenWord.toLowerCase()) {
        message.textContent = "Dobrze!"
        message.style.color = "green"
        if (resetBtn.classList.contains("hidden")) {
          addPointsToLoggedInUser(Math.random() *1+1)
        }
        else{
        addPointsToLoggedInUser(1)
      }
        } else {
        message.textContent = "Źle!"
        message.style.color = "red"
      }
      resetBtn.classList.remove("hidden")
    }

    resetBtn.addEventListener("click", () => {
      const chosenWord = words[currentWordIndex]
      if (message.style.color=="red") {
        alert(`The correct word was: ${chosenWord}`)
      }
      currentWordIndex++
      loadWord()
    });

    if (words && words.length) {
      loadWord()
    } else {
      scrambledWordElement.textContent = "No words available for this category."
    }
    }
    

    const category = (getQueryParam("category") || "technology").toLowerCase()
    let jsonPath = "categories/technologyWords.json"
    

    switch(category) {
    case "technology":
    jsonPath = "categories/technologyWords.json"
    break;
    case "education":
    jsonPath = "categories/educationWords.json"
    break;
    case "nature":
    jsonPath = "categories/natureWords.json"
    break;
    case "sport":
    jsonPath = "categories/sportWords.json"
    break;
    case "food":
    jsonPath = "categories/foodWords.json"
    break;
    case "music":
    jsonPath = "categories/musicWords.json"
    break;
    case "travel":
    jsonPath = "categories/travelWords.json"
    break;
    case "art":
    jsonPath = "categories/artWords.json"
    break;
    case "history":
    jsonPath = "categories/historyWords.json"
    break;
    case "natural":
    jsonPath = "categories/naturalSciencesWords.json"
    break;
    default:
    jsonPath = "categories/technologyWords.json"
    break;
    }

    fetch(jsonPath)
    .then(response => {
    if (!response.ok) {
    throw new Error("Błąd sieci: " + response.statusText)
    }
    return response.json()
    })
    .then(data => {
    console.log("Załadowano kategorię:", data.category)
    console.log("Słowa:", data.words)

    initWordScrambleGame(data.words)
    })
    .catch(err => {
    console.error("Wystąpił błąd podczas pobierania słów:", err)
    document.getElementById("game").innerHTML = "Błąd podczas ładowania danych."
    })
    })()