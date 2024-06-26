//Prototype - A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // retorna undefined porque é um objeto e não uma função

//Função prototype - É possível adicionar novas propriedades e métodos ao objeto prototype.
Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto

//Acesso ao protótipo - O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.
const andrey = new Pessoa('Andrey', 28);

andrey.nome;
andrey.idade;
andrey.andar();//método do prototype que pode ser acessado pelo objeto criado
andrey.nadar();//método do prototype que pode ser acessado pelo objeto criado

//Proto - O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.
// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
andre.andar();
andre.__proto__.andar();

//Herança de protótipo - O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();

//Construtores Nativos - Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores. Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

//Acessando função do protótipo - É comum, principalmente em códigos mais antigos, o uso direto de funções do protótipo do construtor Array.
const lista = document.querySelectorAll('li');

// Transforma em uma array
const listaArray = Array.prototype.slice.call(lista);

//Metódo do objeto vs Protótipo - Nos objetos nativos existem métodos linkados diretamente ao Objeto e outros linkados ao protótipo.
Array.prototype.slice.call(lista);
Array.from(lista);

// Retorna uma lista com os métodos / propriedades
Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

//Apenas os métodos do protótipo são herdados 
[1,2,3].slice(); // existe
[1,2,3].from(); // não existe

//Entenda o que está sendo retornado - Os métodos e propriedades acessado com o . são referentes ao tipo de dados que é retornado antes desse .
const Carro = {
  marca: 'Ford',
  preco: 2000,
  acelerar() {
    return true;
  }
}

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.acelerar // Function
Carro.acelerar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String

//Verifique o nome do construtor com .constructor.name