/* ** Ferramentas da linguagem que abordaremos **
         [] loop wuile
         [] arrays e funções de arrays
         [] condicional switch e if/else
         [] template literals (strings)
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

let nameUser = prompt(`Digite seu nome para inicial o programa!`)
let listItem = []
let options

while(options != 3) {
   options = Number(prompt(`Olá ${nameUser}! Digite a opção desejada.
   1. Cadastrar um item na lista.
   2. Mostrar itens cadastrados.
   3. Sair do programa.`))

   switch(options) {
      case 1 :
         let item = prompt(`Digite o nome do item`)
         listItem.push(item)
         break;
      case 2 :
         if(listItem.length == 0) {
            alert(`Não existem itens cadastrados`)
         } else {
            alert(listItem)
         }
         break;
      case 3 :
         alert(`Programa finalizado! Volte sempre.`)
         break;
      default :
         alert(`Digite número 3 para encerrar o programa!`)
   }
}
