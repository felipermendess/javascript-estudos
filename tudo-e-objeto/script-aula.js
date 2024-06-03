//TUDO É OBJETO -> Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
var nome = 'Felipe';
console.log(nome.length);
console.log(nome.charAt(3));
console.log(nome.replace('Fe','Fi'));
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(nome);//Felipe

//Por um breve momento o número é envolvido em um objeto (coerção), tendo acesso assim como suas propriedades e métodos.
var altura = 1.7;
console.log(altura.toString());
console.log(altura.toFixed());

function areaQuadrado(lado){
  return lado * lado;
}
console.log(areaQuadrado.toString());
console.log(areaQuadrado.length);

var botao = document.querySelector('.btn');
botao.classList.add('primario');
console.log(botao.classList);
console.log(botao.innerText);
botao.addEventListener('click', function(){
  console.log('Clicou');
})