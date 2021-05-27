let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

let num3 = document.getElementById('num3')

function calcular() {
    
    let a = Number(num1.value)
    let b = Number(num2.value)
    
    if ((a == 0 || (num3.value) == 0)) {
       alert('Informe o numerador para operação ou sinal da operação')
    } else if ((num3.value) == '+') {
        c = a + b
    } else if ((num3.value) == '-') {
        c = a - b
    } else if ((num3.value) == '/') {
        c = a / b
    } else if ((num3.value) == '*') {
        c = a * b
    } 
    
    res.innerHTML = `O resultado da operação é: ${c}`

}

