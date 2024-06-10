//ID - getElementById seleciona e retorna elementos do DOM
// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');
// Retorna null caso não exista
const naoExiste = document.getElementById('teste');
console.log(animaisSection);

//CLASSE E TAG - getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.
// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

console.log(gridSection);
console.log(contato);
console.log(ul);

// Retorna o primeiro elemento
console.log(gridSection[0]);

//SELETOR GERAL - querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
const animais = document.querySelector('.animais');
const contact = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

//SELETOR GERAL LISTA - querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList. Diferente do getElementsByClassName, a lista aqui é estática
const gridsection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridsection);
