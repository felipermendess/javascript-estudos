//Foreach - Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
// const imgs = document.querySelectorAll('img');

// imgs.forEach(function(item){
//   console.log(item);
// });

//Parâmetros do foreach - O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
const imagens = document.querySelectorAll('img');

imagens.forEach(function(item, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

//Foreach e array - forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

//Arrow Function - Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
const img = document.querySelectorAll('img');

img.forEach((item) => {
  console.log(item);
});

//Parâmetros e parênteses - casos.
const images = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
images.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
images.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
// let i = 0;
// images.forEach(() => {
//   console.log(i++);
// });

//Return - É possível omitir as chaves {} para uma função que retorna uma linha. PS: Não é permitido fechar a linha com ;
const image = document.querySelectorAll('img');

image.forEach(item => 
  console.log(item)
);
//ou
image.forEach(item => console.log(item));
