/* Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- [ x ] nome; 
- [ x ] nota da primeira prova;
- [ x ] nota da segunda prova.

Depois de criada a lista:

- [ x ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ x ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
   {
      name: "Arthur",
      gardeTestOne: 8,
      gardeTestTwo: 10
   },
   {
      name: "Flavia",
      gardeTestOne: 5,
      gardeTestTwo: 10
   },
   {
      name: "Breno",
      gardeTestOne: 3,
      gardeTestTwo: 4
   }
]

function calAverage(gardeTestOne, gardeTestTwo) {
   let result = (gardeTestOne + gardeTestTwo)/2
   return result
}
console.log(calAverage(students[0].gardeTestOne, students[0].gardeTestTwo))

for(let student of students) {
   let averageStudent = calAverage(student.gardeTestOne, student.gardeTestTwo)
   if(averageStudent >= 7) {
      alert(`A média do(a) aluno(a) ${student.name} é: ${averageStudent}\nParabéns, ${student.name}! Você foi aprovado(a) no consurso!`)
   } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${averageStudent}\nNão foi dessa vez, ${student.name}! Tente novamente!`)
   }
}
