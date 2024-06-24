//Exemplo - Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.
// const Dom = {
//   seletor: 'li',
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativo() {
//     this.element().classList.add('ativo');
//   },
// }

// Dom.ativo(); // adiciona ativo ao li
// Dom.seletor = 'ul';
// Dom.ativo(); // adiciona ativo ao ul

//Com Constructor Function
function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = function() {
    this.element().classList.add('ativar');
  }
}

const li = new Dom('li');
const ul = new Dom('ul');

//Lembre-se de usar parâmetros
// function Dom(seletor) {
//   const element = document.querySelector(seletor);
//   this.ativo = function(classe) {
//     element.classList.add(classe);
//   };
// }

// const lista = new Dom('ul');
// lista.ativo('ativo');

// const lastLi = new Dom('li:last-child');
// lastLi.ativo('ativo');
