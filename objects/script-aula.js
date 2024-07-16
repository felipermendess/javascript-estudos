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

//Object.freeze(), Object.seal(), Object.preventExtensions() - Object.freeze() impede qualquer mudança nas propriedades. Object.seal() previne a adição de novas propriedades e impede que as atuais sejam deletadas. Object.preventExtensions() previne a adição de novas propriedades.
const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
// Object.freeze(carro3);
// Object.seal(carro3);
// Object.preventExtensions(carro3);

carro.marca = 'Honda';

//Verificações
console.log(Object.isFrozen(carro3));
console.log(Object.isExtensible(carro3));
console.log(Object.isSealed(carro3));