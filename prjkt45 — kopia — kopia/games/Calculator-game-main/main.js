function add(n)
{
    if (num1len<10)
    {
        num1 = num1 * 10 + n
        num1len=num1len+1
        document.getElementById("usc").innerHTML = num1
    }
}

function del()
{
    if (num1len<0)
    {
        document.getElementById("usc").innerHTML = num1
        return
    }
        num1 = Math.trunc(num1 / 10)
        num1len=num1len-1
        document.getElementById("usc").innerHTML = num1
    
}
    
function del2()
{
    if (num1len<0){
        document.getElementById("usc").innerHTML = num1
        return
    }
    m = false
    if (num1<0)
    {
        num1=num1*-1;
        m = true;
    }
    let i = num1
    while (i>10)
    {
        i = i/10
    }
    i = Math.trunc(i)
    num1 -= (10**(num1len-1)) * i
    num1len-=1
    if (m===true) {
        num1 = num1*-1;
    }
    document.getElementById("usc").innerHTML = num1
}

function play()
{
    let c = Math.floor(Math.random() * 100) + 1
    let d = Math.floor(Math.random() * 100) + 1
    let e = Math.floor(Math.random() * 4) + 1
    
    switch (e) {
        case 1:
            f = c+d
            document.getElementById("qsc").innerHTML = (String(c) + "+" + String(d))
            break;
    
        case 2:
            f = c-d
            document.getElementById("qsc").innerHTML = (String(c) + "-" + String(d))
            break;
    
        case 3:
            c = Math.floor(Math.random() * 30) + 1
            d = Math.floor(Math.random() * 30) + 1
            f=c*d
            document.getElementById("qsc").innerHTML = (String(c) + "*" + String(d))
            break;
        
        case 4:
            f=c/d
            document.getElementById("qsc").innerHTML = (String(c) + "/" + String(d))
            break;
    
        default:
            break;
    }
}
    
function quess(d)
{
    let a = document.getElementById("usc").innerHTML
    let p = f
    if (d==1)
    {
    p=Math.round(p)
    }
    if (a==p) 
    {
        num1 = 0
        num1len = 0
        document.getElementById("usc").innerHTML = "Correct!!"
        let operator = document.getElementById("qsc").innerHTML.split(/([+\-*/])/)
        if (operator === "*") {
            addPointsToLoggedInUser(3)
        }
        else if (operator === "/"){
            addPointsToLoggedInUser(2)
        }
        else {
            addPointsToLoggedInUser(1)
        }
        play();
    }else{
        document.getElementById("usc").innerHTML = "Wrong";
    }
}

function m(){
    num1=num1*-1
    document.getElementById("usc").innerHTML = num1
}

document.onkeydown = function (k) {
if(k.key<=0 || k.key>=0){
    add(Math.trunc(k.key))
}
};

var f = 0
let num1 = 0
let num1len = 0
play()