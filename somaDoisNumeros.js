/* 
    Solicite 2 números, faça a soma deles
    e apresente o resultado final ao usuário
*/
alert('Soma de 2 números!')
let numberOne = prompt("Digite o primeiro número?")
let numberTwo = prompt("Digite o segundo número?")
//let sum = ((Number(numberOne) + Number(numberTwo)) / 2) // type conversion or type casting
let result = Number(numberOne) + Number(numberTwo)
alert(`A soma dos números  é: ${result}`)