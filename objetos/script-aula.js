//OBJETOS - Conjunto de variáveis ​​e funções, que são chamadas de propriedades e métodos. SINTAXE {} chave e valor;
var pessoa = {
  nome: 'Felipe',
  idade: 19,
  sexo: 'Masculino',
  cursaFaculdade: true,
}
console.log(pessoa.nome, pessoa.idade);

//MÉTODOS - É uma propriedade que possui uma função no local do seu valor. //Abreviação de area: function() {}para area() {}, no ES6+
var quadrado = {
  lados: 4,
  area(lado){
    return lado * lado;
  }
}
console.log(quadrado.area(5));

//THIS - Referência ao objeto em si.
var perimetro = {
  lados: 4,
  perimetroFunction(lado){
    return this.lados * lado;
  }
}
console.log(perimetro.perimetroFunction(5));

//MATH -> Objeto Nativo Do JavaScript
var pi = Math.PI;
var numeroAleatorio = Math.random();
console.log(pi, numeroAleatorio);

//Objeto é criado com {}
var obj = {};
console.log(typeof obj);

//DOT NOTATION GET -> Acesse propriedades de um objeto utilizando o ponto.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
var bg = menu.backgroundColor; // '#84E'

//DOT NOTATION SET -> Substitui o valor de uma propriedade utilizando .e =após o nome da mesma.
var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'

//ADICIONAR PROPRIEDADES E MÉTODOS
var menu = {
  width: 800,
}
menu.height = 50;
menu.position = 'fixed';

//THIS -> Referência ao próprio objeto.
var height = 120;
var menu = {
  width: 800,
  height: 50,//this
  metadeHeight() {
    return this.height / 2;
  }
}
console.log(menu.metadeHeight()); // 25
// sem o this, seria 60

//PROTÓTIPO E HERANÇA -> O objeto possui propriedades herdadas e métodos do objeto que foi utilizado para criar o mesmo.
//hasOwnProperty -> verifica se há ou não aquela propriedade no objeto.
var menu = {
  width: 800,
}
menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false




