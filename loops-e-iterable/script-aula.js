//Iterable - São objetos que possuem o método [Symbol.iterator], geralmente no protótipo, é dentro dele que a função que lida com a iteração será definida. Ex: Array, String, NodeList, boa parte das Array-Like e outros.
// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then(({headers}) => console.log(headers));

//For of - É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.
// const frutas = ['Banana', 'Morango', 'Uva'];
// const frase = 'Isso é JavaScript';

// for(const fruta of frutas) {
//   console.log(fruta);
// }

// for(const char of frase) {
//   console.log(char);
// }


//Spread e for of - Com o for loop podemos manipular cada um dos elementos do objeto iterável.
// const buttons = document.querySelectorAll('button');

// for(const btn of buttons) {
//   btn.style.background = 'blue';
// }

// console.log(...buttons);

//Apenas Iteráveis - O for...of não irá funcionar em um objeto comum que não seja iterável.
// const carro = {
//     marca: 'Honda',
//     ano: 2018,
//   }
  
//   // Erro, não é Iterável
//   for(const propriedade of carro) {
//     console.log(propriedade);
//   }
  
//For in - Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.
// const carro = {
//     marca: 'Honda',
//     ano: 2018,
//   }
  
//   for(const propriedade in carro) {
//     console.log(propriedade);
//   }

//Arrays e for in - Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.
// const frutas = ['Banana', 'Morango', 'Uva'];

// for(const index in frutas) {
//   console.log(index);
// }

// for(const index in frutas) {
//   console.log(frutas[index]);
// }

//Chave e valor - Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.
// const btn = document.querySelector('button');
// const btnStyles = getComputedStyle(btn);

// for(const style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

//Do while - Outro tipo de loop é o Do / While. Não é muito utilizado.
// let i = 0;
// do {
//   console.log(i++)
// } while (i <= 5);


//Testes
const pessoas = ['Felipe', 'Gustavo'];//Possui o symbol iterator
const frases = 'Quinta-Feira';//Possui o symbol iterator

//é interessante saber se possuem, pois se possuirem, é possível usar o for of
for(const frase of frases){ //antes do of pode ser qualquer nome
    console.log(frases)
}

for(const pessoa of pessoas){ //antes do of pode ser qualquer nome
    console.log(pessoa)
}

//spread e for of
const buttons = document.querySelectorAll('button');

for(const btn of buttons) {
  btn.style.color = 'blue';
}

console.log(...buttons);

//apenas itens iteráveis podem ser uisados com o for of
const carro = {
    marca: 'Mercedes',
    ano: 2018
}

console.log(carro.__proto__)

//for in pode ser usado no lugar do for of - Este loop irá retornar a chave (key) de todas as propriedades *enumeráveis* (que não sejam símbolos) de um objeto.
//do objeto puxa só as propriedades enumeráveis
for(const key in carro){
    console.log(key)//propriedades
    // console.log(carro[key])//valores
}

//os arryas também podem ser usados com for in, porém o que é puxado é o index
const frutas = ['Maçã', 'Banana', 'Laranja']
for(const f in frutas){
    console.log(f)//index
    // console.log(frutas[f])//frutas
}


// const btn = document.querySelector('button')
// const btnStyles = getComputedStyle(btn)
// for(const style of btnStyles){
//     // console.log(style)//estilos
//     console.log(style + ': ' + btnStyles[style])
// }

//do while
let i = 0;
do{
   console.log(i++) 
}while(i <= 10)