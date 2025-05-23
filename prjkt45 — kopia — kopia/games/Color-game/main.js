

const targetColor = {
    r: 0,
    g: 0,
    b: 0
}

const currentUrl = window.location.href


function newColor() {
    for (let pigment in targetColor) {
    let mixtype=-1
    if (currentUrl.includes('rgb.html')) {mixtype = 1} 
    if (mixtype==1) {targetColor[pigment] = 0}
    else{targetColor[pigment] = 255; console.log('mixtype',mixtype)}
    let mixpower=Math.round(Math.random() * 17)+3
    let mixpower2=Math.round(Math.random() * 200)+20
    for (let i = 0; i < Math.random() * mixpower2; i++) {
    targetColor[pigment] = targetColor[pigment]+Math.floor(Math.random() * mixpower  * mixtype)
    }
}
document.getElementById('target-color').style.backgroundColor = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`
}



function calculateDifference(color1, color2) {
    let x = 1
    const diffR = Math.abs(color1.r - color2.r)
    const diffG = Math.abs(color1.g - color2.g)
    const diffB = Math.abs(color1.b - color2.b)
    return diffR + diffG + diffB
}

document.getElementById('check-button').addEventListener('click', () => {
    const diff = calculateDifference(currentColor, targetColor)
    if (diff <= 15) {
        alert('Perfect match! Well done!')
        addPointsToLoggedInUser(3)
    }else if(diff<=40){
        alert(`Almost perfect match! Very good! [Difference: ${diff}]`)
        addPointsToLoggedInUser(2)
    }else if(diff<=70){
    alert(`Difference: ${diff}, could be better, but it's ok!`)
    addPointsToLoggedInUser(1)
}
 else {
        alert(`Difference: ${diff}. Be better next time!`)
    }
    newColor()
})
    const colorMixer = document.getElementById('color-mixer')

    let count = 1

    function updateColor() {
        colorMixer.style.backgroundColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
        console.log(currentColor)
    }

    function reset(){
        count=1
        if (currentUrl.includes('cmyk.html')) {currentColor = { r: 255, g: 255, b: 255 }}
        else{currentColor = { r: 0, g: 0, b: 0 }}
        updateColor()
    }

    function mixColor(r,g,b) {
        power = parseFloat(document.getElementById('color-slider').value)
        console.log(power)
        count+=power
        if ((currentUrl.includes('cmyk.html'))){power=-power}
        if (r) {currentColor.r = (currentColor.r+power)}
        if (g) {currentColor.g = (currentColor.g+power)}
        if (b) {currentColor.b = (currentColor.b+power)}
        updateColor()
    }

    document.getElementById('reset-dot').addEventListener('click', () => reset())

    document.addEventListener('keydown', event => {
        if (event.key.toLowerCase() === 'r') {
            reset()
        }
    })

newColor()
setThemeFromCookie()