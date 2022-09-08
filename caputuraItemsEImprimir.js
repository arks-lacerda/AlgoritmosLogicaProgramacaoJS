/* Estrutura de dados.
  - Organização e gerenciamento dos dados
  - Melhor efeciência do código

  [] Estruturas de repetição
  [] Vetores (Arrays)
*/

let marketList = []

for (item = 0 ; item < 10; item++) {
  let itemName = prompt(`Digite nome do produto ${item + 1}`)
  marketList[item] = itemName
}

alert(marketList)
