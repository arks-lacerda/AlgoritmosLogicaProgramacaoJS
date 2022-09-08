/* Solicitar o nome do Aluno e as 3 notas do bimestre calcular a média dequele 
  	aluno.

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre,note motivar o aluno a dar seu melhor na prova de 
    recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

/*
alert('Escola João e Maria')
let student = prompt('Digite o nome do aluno:')
let noteOne = prompt('Digite a primeira nota do aluno:')
let noteTwo = prompt('Digite a segunda nota do aluno:')
let noteThree = prompt('Digite a terceira nota do aluno:')

let average = (Number(noteOne) + Number(noteTwo) + Number(noteThree))/3

average = average.toFixed(2)

if(average >= 6) {
  alert(`Parabéns você Passou de Bimestre!\nNome do aluno: ${student} \n Sua nota final é: ${average}`)
} else {
  alert(`Você está de recuperação! Vamos estudar mais para passar de Bimestre!\nNome do aluno: ${student}\nSua nota final é: ${average}`) 
}
*/

let student = prompt('Digite o nome do aluno:')
let noteOne = prompt('Digite a primeira nota do aluno:')
let noteTwo = prompt('Digite a segunda nota do aluno:')
let noteThree = prompt('Digite a terceira nota do aluno:')

let average = (Number(noteOne) + Number(noteTwo) + Number(noteThree))/3

average = average.toFixed(2)

if(average >= 6) {
  alert(`Parabéns você Passou de Bimestre!\nNome do aluno: ${student}\n Sua nota final é: ${average}`)
} else if (average < 3) {
  alert(`Você foi reprovado, vamos estudar mais no próximo Bimestre!\nNome do aluno: ${student}\nSua nota final é: ${average}`)
} else {
  alert(`Você está de recuperação! Vamos estudar mais para passar de Bimestre!\nNome do aluno: ${student}\nSua nota final é: ${average}`) 
}