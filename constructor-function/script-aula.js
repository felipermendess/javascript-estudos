//Objetos - Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.
// const carro = {
//   marca: 'Marca',
//   preco: 0,
// }

// const honda = carro;
// honda.marca = 'Honda';
// honda.preco = 4000;

// const fiat = carro;
// fiat.marca = 'Fiat';
// fiat.preco = 3000;
//carro, fiat e honda apontam para o mesmo objeto.

//Constructor Functions - Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

//New Keyword - A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
const savero = new Carro();

// 1 Cria um novo objeto
savero = {};

// 2 Define o protótipo
savero.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = savero;

// 4 Executa a função, substituindo this pelo objeto
savero.marca = 'Marca';
savero.preco = 0;

// 5 Retorna o novo objeto
return savero = {
  marca: 'Marca',
  preco: 0,
}

//Parâmetros e Argumentos - Podemos passar argumentos que serão utilizados no momento da criação do objeto.
function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('Honda', 4000);
const fiat = new Carro('Fiat', 3000);
