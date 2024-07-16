//Object - Todo objeto é criado com o construtor Object e por isso herda as propriedades e métodos do seu prototype.
const carro = {
  marca: 'Ford',
  ano: 2018,
}

const pessoa = new Object({
  nome: 'André',
  idade: 28,
})

//Métodos de object - Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.
const car = {
  rodas: 4, 
  init(valor){
    this.marca = valor;
    return this;
  },
  acelerar(){
    return this.marca + ' acelerou';
  },
  buzinar(){
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(car).init('Honda');
const ferrari = Object.create(car).init('Ferrari');

//Object.assign() - Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.
const funcaoAutomovel = {
  acelerar() {
    return 'acelerou';
  },
  buzinar() {
    return 'buzinou';
  },
}

const moto = {
  rodas: 2,
  capacete: true,
}

Object.assign(moto, funcaoAutomovel);

//Object.DefineProperties - Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades. A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.
//Existe também o Object.defineProperty, para uma propriedade única.
const motoclicleta = {}

Object.defineProperties(motoclicleta, {
  rodas: {
    //value: 2,
    //writable: false,//impede mudança de valor
    enumerable: false,//torna enumerável
    configurable: false,//impede deletar e mudança de valor
    get(){
      return this._rodas;
    },
    set(valor){
      this._rodas = valor * 2;
    },
  }//por padrão os valores começam false ex: configurable;
})

console.log(motoclicleta)

//Get e Set - É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos ob.propriedade = 'Valor' a função de set é ativada.

//Object.getOwnPropertyDescriptors(obj) - Lista todos os métodos e propriedades de um objeto, com as suas devidas configurações.
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade

//Object.keys(obj), Object.values(obj) Object.entries(obj) - Object.keys(obj) retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com os valores do objeto. Object.entries(obj) retorna uma array com array's contendo a chave e o valor.
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro1 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro1);
// ['marca', 'ano']
Object.values(carro1);
// ['Ford', 2018]
Object.entries(carro1);
// [['marca', 'Ford'], ['ano', 2018]]

//GetOwnPropertyNames - Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro2 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro2);
// ['marca', 'ano']

//Object.getPrototypeOf() e Object.is() - Object.getPrototypeOf(), retorna o protótipo do objeto. Object.is(obj1, obj2) verifica se os objetos são iguais e retorna true ou false.
const frutas = ['Banana'];
console.log(Object.getPrototypeOf(''));

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
const novaFruta = frutas1;

Object.is(frutas1, frutas2); // false
Object.is(frutas1, novaFruta); // true

//Object.freeze(), Object.seal(), Object.preventExtensions() - Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades, porém permite o delete das antigas.
const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
// Object.freeze(carro3);
// Object.seal(carro3);
// Object.preventExtensions(carro3);

carro.marca = 'Honda';

//Verificações
console.log(Object.isFrozen(carro3));//verifica se está congelado
console.log(Object.isExtensible(carro3));//verifica se está extensível - Só é true quando não previne a extensão!
console.log(Object.isSealed(carro3));//verifica se está fechado

//Propriedades e métodos do protótipo - Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de funções construtoras. {}.constructor retorna a função construtora do objeto.
const frutas3 = ['Banana', 'Uva'];
frutas3.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

//{}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop') - Verifica se possui a propriedade e retorna true. A propriedade deve ser direta do objeto e não do protótipo. O {}.propertyIsEnumerable() verifica se a propriedade é enumerável.
frutas.hasOwnProperty('map');//false
Array.hasOwnProperty('map');//false
Array.prototype.hasOwnProperty('map');//true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

//isPrototypeOf(valor) - Verifica se é o protótipo do valor passado.
Array.prototype.isPrototypeOf(frutas); // true

//ToString - Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos de Array, String e mais. Por isso é comum utilizarmos a função direto do Object.prototype.toString.call(valor).

const frutas4 = ['Uva','Laranja'];
const frase2 = 'Oi frase';
const somar = function(a,b){
  return a + b;
}
const carro4 = {
  marca: 'Fiat'
}
console.log(carro4.toString());

console.log(Object.prototype.toString.call(frase2));//maneira certa de verificar qual o tipo de um objeto

const frutas5 = ['Banana', 'Uva'];
frutas5.toString(); // 'Banana,Uva'
typeof frutas5; // object
Object.prototype.toString.call(frutas5); // [object Array]

const frase3 = 'Uma String';
frase3.toString(); // 'Uma String'
typeof frase3; // string
Object.prototype.toString.call(frase3); // [object String]

const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
typeof carro; // object
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]
