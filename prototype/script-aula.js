//Prototype - A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

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
andrey.andar();
andrey.nadar();

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
