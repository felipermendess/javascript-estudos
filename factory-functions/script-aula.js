//Factory Function -  São funções que retornam um objeto sem a necessidade de utilizarmos a palavra chave new. Possuem basicamente a mesma função que constructor functions / classes.
// function createButton(text) {
//     function element() {
//       const buttonElement = document.createElement('button');
//       buttonElement.innerText = text;
//       return buttonElement;
//     }
//     return {
//       element: element,
//       text: text,
//     }
//   }
  
//   const comprarBtn = createButton('Comprar');

//Métodos e variáveis privadas - Uma das vantagens é a possibilidade de criarmos métodos / variáveis privadas.
// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;

//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   function nadar() {
//     return `${nomeCompleto} nadou`;
//   }
//   return {
//     nome,
//     sobrenome,
//     andar,
//     nadar,
//   }
// }

// const designer = criarPessoa('André', 'Rafael');

//Ice Fatory - Podemos impedir que os métodos e propriedades sejam modificados com Object.freeze(). Ideia inicial de Douglas Crockford.
// 'use strict';

// function criarPessoa(nome, sobrenome) {
//   const nomeCompleto = `${nome} ${sobrenome}`;
//   function andar() {
//     return `${nomeCompleto} andou`;
//   }
//   return Object.freeze({
//     nome,
//     sobrenome,
//     andar,
//   });
// }

// const designer = criarPessoa('André', 'Rafael');

//Constructor / Factory Function - Uma das vantagens da Factory Function é a possibilidade de iniciarmos a mesma sem a utilização da palavra chave new. Também é possível fazer isso com uma Constructor Function.
// function Pessoa(nome) {
//   if (!(this instanceof Pessoa)) // ou (!new.target)
//     return new Pessoa(nome);
//   this.nome = nome;
// }

// Pessoa.prototype.andar = function() {
//   return `${this.nome} andou`;
// }

// const designer = Pessoa('André');

//TESTES
function createButton(text){
    function element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerHTML = text;
        return buttonElement;
    }
    return Object.freeze({
        text,
        element
    })
}

const btnComprar = createButton('Comprar');
console.log(btnComprar.element())

function criarPessoa(nome, sobrenome){
    const nomeCompleto = `${nome} ${sobrenome}`;
    
    function andar(){
        return nomeCompleto + ' andou';
    }
    function nadar(){
        return nomeCompleto + ' nadou';
    }
    return Object.freeze({
        nome, 
        sobrenome,
        andar,
        nadar
    })
}

const programador = criarPessoa('Felipe','Mendes');
console.log(programador);

function Pessoa(nome){
    if(!(this instanceof Pessoa)){//ou new.target
        return new Pessoa(nome);
    }
    this.nome = nome;
}

Pessoa.prototype.andar = function(){
   return this.nome + ' andou';
}

const dev = Pessoa('Felipe');
console.log(dev);