/* ** Aperfeiçoando a resolução de problemas **
 *  Perguntas a serem feitas:
      1. Quais os dados de entranda que terei? (inputs)
      2. Quais as variáveis?
      3. Qual o caminho ideal? (fluxo ideal)
      4. Qual(is) 0(s) caminho(s) alternativo(s)? (fluxo alterantivo)
      5. Quais tratamentos de daddos preciso fazer?
      6. Qual é a saída, ou quais as dados de saída, esperado? (outputs)

   ** Ferramentas da linguagem que abordaremos.
*/
/*
   Crie uma lista de pacientes

   Cada paciente deverá conter
      Nome
      Idade
      Peso
      Altura
   
   Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
   {
      name: 'Arthur',
      age: 40,
      weight: 104,
      height: 182
   },
   {
      name: 'Becky',
      age: 35,
      weight: 55,
      height: 162
   },
   {
      name: 'Rick',
      age: 42,
      weight: 85,
      height: 179
   }
]

const patientsNames = []

for(let patient of patients) {
   patientsNames.push(`Esse é ${patient.name}, tem ${patient.age} idade, pesa ${patient.weight} kg e tem ${patient.height} altura.\n`)
}  

/*
for(index =0; index < patients.length; index++) {
   patientsNames[index] = patients[index].name
}
*/
alert(patientsNames)