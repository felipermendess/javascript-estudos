'use strict';

//Escopo de Função - Variáveis ​​declaradas dentro de funções não são acessadas fora das mesmas.
function mostrarCarro() {
  var carro = 'Fusca';//erro do escopo
  console.log(carro);
}
mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

//Variável Global ERRO - Declarar variáveis ​​sem a palavra chave var, const ou let, cria uma variável que pode ser acessada em qualquer escopo (global). Isso é um erro.
function mostrarCarro() {
  carro = 'Fusca';//variável sem var, let ou const.
  console.log(carro);
}
mostrarCarro(); // Fusca
console.log(carro); // Fusca
//'use strict' para impedir isso.

//Escopo de Função (PAI) - Variáveis ​​declaradas no escopo pai da função, podem ser acessadas pelas funções.
var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}
mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

//Escopo de Bloco - Variáveis ​​criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizada const e let, pois estas respeitam o escopo do bloco.
if(true) {
  var carro = 'Fusca';//var vaza o bloco!
  console.log(carro);
}
console.log(carro); // Carro // vazamento da variável.
//Mesmo com a condição falsa, a variável ainda será declarada utilizando içamento e o valor fica como indefinido.
if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined

//Const e let no lugar de var é o correto.
// CONST E LET > VAR.

//Criando bloco com {}
{//bloco
  var carro = 'Fusca';
  const ano = 2018;
}//bloco
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

//For loop - Ao usar var dentro de um for loop, que é um bloco, o valor da variável utilizada irá vazar e existirá fora do loop.
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10 //variável i vazado!
//Com o let evitamos que o número vaze.
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined

//Const - Mantenha o escopo no bloco, impeça a redeclaração e impeça a alteração do valor da variável, evitando bugs no código.
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}//Pode mudar propridedades de um objeto!

data.dia = 29; // Funciona
data = 'Janeiro'; // erro

//Let - Mantém o escopo no bloco, impede a redeclaração, mas permite a alteração do valor da variável.
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

//let ano = 2020; // erro, redeclarou a variável
