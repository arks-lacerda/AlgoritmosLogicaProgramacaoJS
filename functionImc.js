/*
   Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

   "Paciente ${pacient.name} possui o IMC de: {pacient.imc}"

   Onde X é o nome do paciente e Y é o IMC desse paciente

   Crie uma função para fazer o cálculo do IMC.
*/


/* Função Anomina
const printPatientIMC = function (patient) {
   return `
   Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
   `
}
*/

/* Arrow function
const printPatientIMC = (patient) => {
   return `
   Paciente ${patient.name} possui o IMC de ${(patient.weight / ((patient.height / 100) ** 2)).toFixed(2)}
   `
}
*/

function calculateBmi(weight, height) {
height = height / 100
   let bmi = Number((weight / (height * height)).toFixed(2))
   return bmi
}
//named function
function printPatientIMC(patient) {
   let templatePrintPatientIMC = `Paciente ${patient.name} possui o IMC de ${calculateBmi(patient.weight, patient.height)}`
   return templatePrintPatientIMC
}

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
      weight: 82,
      height: 182
   }
]

const patientsList = []

//console.log(calculateBmi(patients[0].weight, patients[0].height))
/*
alert(`Paciente ${patients[0].name} possui o IMC de ${(patients[0].weight / ((patients[0].height / 100) ** 2)).toFixed(2)}`)
*/

for(let pacient of patients) {
   let IMCmessage = printPatientIMC(pacient)
   alert(IMCmessage)
}