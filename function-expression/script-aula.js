//Function Declaration
// São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.

// function somar(a,b) {
//   return a + b;
// }

// somar(4,2); // 6

//Function Expression
// É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.

// const somar = function(a,b) {
//   return a + b;
// }

// somar(4,2); // 6

//Hoisting
// Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.

// somar(4,2); // 6
// dividir(4,2); // Erro

// function somar(a,b) {
//   return a + b;
// }
// const dividir = function(a,b) {
//   return a / b;
// }

//Arrow Function 
// Podemos criar utilizando arrow functions.

// const somar = (a, b) => a + b;
// somar(4,2); // 6

// const quadrado = a => a * a;
// quadrado(4); // 16

//Estrutura/Preferência 
// Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.

// // Declarada como método de window
// // vaza o escopo de bloco, como se
// // fosse criada utilizando var
// function somar(a,b) {
//   return a + b;
// }
// const dividir = (a,b) => a / b;

// somar(4,2);
// dividir(4,2);

//IIFE 
// Antes da introdução de modules e da implementação do escopo de bloco, a forma mais comum utilizada para isolarmos o escopo de um código JavaScript era através das chamadas IIFE's.

// var instrumento = 'Violão';

// (function() {
//   // código isolado do escopo global
//   var instrumento = 'Guitarra';
//   console.log(instrumento); // Guitarra
// })();

// console.log(instrumento); // Violão

//IIFE - Arrow Function
// Compiladores ainda transformam modules em IIFE's para manter a compatibilidade com browsers antigos.

// const instrumento = 'Violão';

// (() => {
//   const instrumento = 'Guitarra';
//   console.log(instrumento); // Guitarra
// })();

// console.log(instrumento); // Violão

//TESTES
function retornaDobrado(numero){
    return numero * 2;
}
console.log(retornaDobrado(4));//funciona também antes da função

const somar = (a,b) => a + b; //não afeta o escopo global (window)


console.log(somar(2, 3));//não funciona antes da função

const instrumento = 'Violão';

// (function() {
//     const instrumento = 'Guitarra';
//     console.log(instrumento);
// })();// ou
(() => {
    const instrumento = 'Guitarra';
    console.log(instrumento);
})();

console.log(instrumento);

