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