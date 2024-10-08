//get e set - Podemos definir comportamentos diferentes de get e set para um método.
// const button = {
//     get element() {
//       return this._element;
//     }
//     set element(tipo) {
//       this._element = document.createElement(tipo);
//     }
//   }
  
//   button.element = 'button'; // set
//   button.element; // get (<button></button>);
  
//get - Se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos.
// const matematica = {
//     get PI() {
//       return 3.14;
//     },
//   };
  
//   matematica.PI; // get (3.14)
//   matematica.PI = 20; // nada acontece
  
//set - Eu posso ter um método com set apenas, que modifique outras propriedades do meu objeto.
// const frutas = {
//     lista: [],
//     set nova(fruta) {
//       this.lista.push(fruta);
//     },
//   };
  
//   frutas.nova = 'Banana';
//   frutas.nova = 'Morango';
//   frutas.lista; // ['Banana', Morango];

//Classes - Assim como em um objeto, as classes podem ter métodos de get e set também.
// class Button {
//     constructor(text, color) {
//       this.text = text;
//       this.color = color;
//     }
//     get element() {
//       const buttonElement = document.createElement('button');
//       buttonElement.innerText = this.text;
//       buttonElement.style.color = this.color;
//       return buttonElement;
//     }
//   }
  
//   const blueButton = new Button('Comprar', 'blue');
//   blueButton.element; // retorna o elemento

//set e class - Com o set podemos modificar apenas parte do elemento de get. É comum definirmos variáveis privadas, utilizando o underscore _privada.
// class Button {
//     constructor(text) {
//       this.text = text;
//     }
//     get element() {
//       const elementType = this._elementType || 'button';
//       const buttonElement = document.createElement(elementType);
//       buttonElement.innerText = this.text;
//       return buttonElement;
//     }
//     set element(type) {
//       this._elementType = type;
//     }
//   }
  
//   const blueButton = new Button('Comprar');
//   blueButton.element; // retorna o elemento
  
  
  
//TESTES
const button = {
    get tamanho(){
        return this._element || 100;
    },
    set tamanho(element){
        return this._element = element;
    }
}

console.log(button.tamanho);
console.log(button.tamanho = 300);
console.log(button.tamanho);

const pessoas = {
    lista: [],
    set adcPessoas(nome){
        this.lista.push(nome);
    }
}

pessoas.adcPessoas = 'Felipe';
pessoas.adcPessoas = 'Gustavo';
pessoas.adcPessoas = 'Davi';
pessoas.adcPessoas = 'Lisan';
console.log(pessoas);

class Button {
    constructor(text, background){
        this.text = text;
        this.background = background;
    }
    get element(){
        const type = this._elementType || 'button';
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
    set element(type){
        this._elementType = type;
    }
}

const purpleButton = new Button('Compre','purple');
console.log(purpleButton.element = 'a');
console.log(purpleButton.element);
console.log(purpleButton);
purpleButton._elementType = 'div';
console.log(purpleButton.element);
