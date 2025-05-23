document.getElementById('calcForm').addEventListener('submit', function(e) {
        e.preventDefault()
        let num1 = parseFloat(document.getElementById('num1').value)
        let num2 = parseFloat(document.getElementById('num2').value)
        let symbol = document.getElementById('symbol').value
        let result;
        switch (symbol) {
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '*':
                result = num1 * num2
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2
                } else {
                    result = 'Error'
                }
                break;
            default:
                result = 'Error'
        }
        document.getElementById('result').textContent = 'Result: ' + result;
    })