/* 
    Capturar 2 números
    e  fazer as operações, matemáticas
    de soma, subtração, multiplicação, divisão e resto da divisão.


alert("Calculadora")
let numberOne = prompt("Digite o primeiro número?")
let numberTwo =prompt("Digite o segundo número?")
let operator = prompt(`Digite o operator: Exe.: + - * / %`)
switch (operator) {
  case "+":
    const sum = Number(numberOne) + Number(numberTwo)
    alert(`A soma do resultado é : ${sum}`)
    break
  case "-":
    const sub = Number(numberOne) - Number(numberTwo)
    alert(`A subtração do resultado é : ${sub}`)
    break
  case "*":
    const mult = Number(numberOne) * Number(numberTwo)
    alert(`A multiplicação do resultado é : ${mult}`)
    break
  case "/":
    const div = Number(numberOne) / Number(numberTwo)
    alert(`A divisão do resultado é : ${div}`)
    break
  case "%":
    const rest = Number(numberOne) % Number(numberTwo)
    alert(`O resto da divisão é : ${rest}`)
    break
  default:
    alert("Operador invalido. Operadores aceitos Exe.: + - * / %")
}
*/

alert("Calculadora")
let numberOne = prompt("Digite o primeiro número?")
let numberTwo =prompt("Digite o segundo número?")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(`A soma do resultado é : ${sum}`)
alert(`A subtração do resultado é : ${sub}`)
alert(`A multiplicação do resultado é : ${mult}`)
alert(`A divisão do resultado é : ${div}`)
alert(`O resto da divisão é : ${rest}`)