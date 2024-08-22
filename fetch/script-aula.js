//Fetch API - Permite fazermos requisições HTTP através do método fetch(). Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.
// fetch('./arquivo.txt').then(function(response) {
//   console.log(response); // Response HTTP (Objeto)
// });

//Response - O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
// fetch('./arquivo.txt').then(function(response) {
//   return response.text();
// }).then(function(corpo) {
//   console.log(corpo);
// });

//Servidor Local - O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.
// fetch('c:/files/arquivo.txt')
// .then((response) => {
//   return response.text();
// })
// .then((corpo) => {
//   console.log(corpo);
// }); // erro
//Se dermos um espaço após o objeto ou pularmos linha, o método continua funcionando.

//JSON - Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js. .json() transforma um corpo em json em um objeto JavaScript.
// fetch('https://viacep.com.br/ws/01001000/json/')
// .then(response => response.json())
// .then(cep => {
//   console.log(cep.bairro, cep.logradouro);
// });

//TEXT - Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.
// const styleElement = document.createElement('style');
// fetch('./style.css')
// .then(response => response.text())
// .then(style => {
//   styleElement.innerHTML = style;
//   document.body.appendChild(styleElement);
// });

//HTML E TEXT - Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.
// const div = document.createElement('div');
// fetch('./sobre.html')
// .then(response => response.text())
// .then(htmlBody => {
//   div.innerHTML = htmlBody;
//   const titulo = div.querySelector('h1');
//   document.querySelector('h1').innerText = titulo.innerText;
// });

//FAZENDO A REQUISIÇÃO DE ARQUIVO INTERNO DE TEXTO COM FETCH E INSERINDO EM UMA DIV
const div = document.querySelector('div');
// const requisicao = fetch('./doc.txt');
// requisicao.then(response => response.text())
// .then((response => {
//   div.innerText = response;
// }))

//PUXANDO CEP
// const cep = fetch('https://viacep.com.br/ws/01001000/json/');
// cep.then(response => {
//   return response.text(); //or json()
// }).then(response => {
//   div.innerText = response;
//   // console.log(response.bairro); //funciona com json
// })

//CRIANDO ELEMENTO STYLE E ADICIONANDO PROPRIEDAS A ELE ATRAVÉS DO FETCH
// const criandoElemento = document.createElement('style');
// fetch('./style.css')
// .then(response => {
//   return response.text();
// }).then(style => {
//   criandoElemento.innerHTML = style;
//   document.body.appendChild(criandoElemento);
// })

const div2 = document.createElement('div');

fetch('./sobre.html')
.then(response => {
  return response.text();
}).then(html => {
  div2.innerHTML = html;
  const titulo = div2.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
})