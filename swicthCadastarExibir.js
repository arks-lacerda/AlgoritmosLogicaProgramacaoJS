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
   Faça uma programa que tenha um menu e apresente a seguinte mensagem:

   Olá ${nameUser}! Digite a opção desejada.
      1. Cadastrar um item na lista.
      2. Mostrar itens cadastrados.
      3. Sair do programa.

   ---
   O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

   Caso o usuário digite 1, ele poderá cadastrar um item em uma lista.
   Caso o usuário digite 2, ele poderá ver os itens cadastrados.
      Se não houver nenhum item cadastrado, mostrar a mensage:
         "Não existem itens cadastrados"
   Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/

let nameUser = prompt(`Digite seu nome, para iniciar o programa:`)
let options;
let listItems = []
//let index = 0

while (options != 3) {
   options= Number(prompt (`Olá ${nameUser}! Digite a opção desejada.\n\n1 - Cadastrar um item na lista.\n2 - Mostrar itens cadastrados.\n3 - Sair do programa.`))
   
   
   if(options == 1) {
      //listItems[index] = prompt(`Digite o nome do item`)
      let item = prompt(`Digite o nome do item`)
      listItems.push(item)
     //index++
   } else if (options == 2) {
      if(listItems.length == 0) {
         alert(`Não existem itens cadastrados`)
      } else {
         alert(listItems)
      }
   } else if (options == 3){
      alert(`Tchau!`)
   } else {
      alert(`Digite 3 para encerrar o programa!`)
   }
   console.log(options)
}