/* ** Jogo da adivinhação**
    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? - Está entre 0 a 10.

    Crie um lógica p/ gerar um número aleatório
    e verificar se o número digitado é o mesmo que aleatório gerado
    pelo sistema.

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tentativas
*/

let numberUser = prompt(`Advinhe o número que estou pensando? - Está entre 0 a 10.`)
numberUser = Number(numberUser)

let numberRandom = Math.round(Math.random() * 10) // Teste para verifar tentativa(s) - 5

let attempts = 1

let statusAttempts = "tentativa"

while(numberUser != numberRandom) {
    numberUser = prompt(`Erro, tente novamente:`)
    attempts++
}

if(attempts > 1) {
    statusAttempts = "tentativas"
}

alert(`Parabéns! Você advinhou o número em ${attempts} ${statusAttempts}.\nNúmero pensando era: ${numberRandom}.`)