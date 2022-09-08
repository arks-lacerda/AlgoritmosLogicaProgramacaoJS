/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ x ]  A soma dos dois números;
- [ x ]  A subtração dos dois números;
- [ x ]  A multiplicação dos dois números;
- [ x ]  A divisão dos dois números;
- [ x ]  O resto da divisão dos dois números;

- [ x ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ x ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let numberOne = Number(prompt(`Digite o primero número:`))
let numberTwo = Number(prompt(`Digite o primero número:`))

let sum = numberOne + numberTwo
let subtraction = numberOne - numberTwo
let multiplication = numberOne * numberTwo
let division = numberOne / numberTwo
let restDivision = numberOne % numberTwo




alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`A resto da divisão dos dois números é: ${restDivision}`)

if(sum %  2 === 0) {
   alert(`A soma dos dois número é par: ${sum}`)
} else {
   alert(`A soma dos dois é impar: ${sum}`)
}

if(numberOne == numberTwo) {
   alert(`Os número são iguais: ${numberOne} = ${numberTwo}`)
} else {
   alert(`Os número são diferentes: ${numberOne} != ${numberTwo}`)
}