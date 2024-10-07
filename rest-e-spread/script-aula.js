//Parâmetros - Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
// function perimetroForma(lado, totalLados) {
//     return lado * totalLados;
//   }
  
//   perimetroForma(10, 4); // 40
//   perimetroForma(10); // NaN
  
// Prâmetros Padrão Default - Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão.
// function perimetroForma(lado, totalLados) {
//     totalLados = totalLados || 4; // se não for definido, será igual à 4
//     return lado * totalLados;
//   }
  
//   perimetroForma(10, 3); // 30
//   perimetroForma(10); // 40

//Parâmetro Padrão (Default) ES6+ - Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.
// function perimetroForma(lado, totalLados = 4) {
//   return lado * totalLados;
// }

// perimetroForma(10, 5); // 50
// perimetroForma(10); // 40

//Arguments - A palavra chave arguments é um objeto Array-like criado dentro da função. Esse objeto contém os valores dos argumentos.
// function perimetroForma(lado, totalLados = 4) {
//     console.log(arguments)
//     return lado * totalLados;
//   }
  
//   perimetroForma(10);
//   perimetroForma(10, 4, 20);
  
//Parâmetros Rest - É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro.
// function anunciarGanhadores(...ganhadores) {
//     ganhadores.forEach(ganhador => {
//       console.log(ganhador + ' ganhou.')
//     });
//   }
  
//   anunciarGanhadores('Pedro', 'Marta', 'Maria');

//Único rest - Só é possível ter um único parâmetro rest e ele deve ser o último.
// function anunciarGanhadores(premio, ...ganhadores) {
//     ganhadores.forEach(ganhador => {
//       console.log(ganhador + ' ganhou um ' + premio)
//     });
//   }
  
//   anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

//Rest e arguments - Apesar de parecidos o parâmetro rest e a palavra arguments possuem grandes diferenças. Sendo rest uma array real e arguments um objeto Array-like.
// function anunciarGanhadores(premio, ...ganhadores) {
//     console.log(ganhadores);
//     console.log(arguments);
//   }
  
//   anunciarGanhadores('Carro', 'Pedro', 'Marta', 'Maria');

//Operador spread - Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.
// const frutas = ['Banana', 'Uva', 'Morango'];
// const legumes = ['Cenoura', 'Batata'];

// const comidas = [...frutas, 'Pizza', ...legumes];

//Spread Argument - O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
// const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

// const listaNumeros = [1,13,21,12,55,2,3,43];
// const numeroMaximoSpread = Math.max(...listaNumeros);

//Transformar em array - É possível transformar itens iteráveis em uma array real com o spread.
// const btns = document.querySelectorAll('button');
// const btnsArray = [...btns];

// const frase = 'Isso é JavaScript';
// const fraseArray = [...frase];

//TESTES
function perimetroQuadrado(lado, totalLados = 2){//parâmetro padrão
    console.log(arguments)//objeto com valores dos argumentos - array like
    return lado * totalLados;
}

console.log(perimetroQuadrado(10,4))
console.log(perimetroQuadrado(10))

function perimetro(lado, lados, ...listaArgumentos){//só pode existir um parâmetro rest por função e tem que ser sempre o último
    console.log(listaArgumentos)//array
    return lado * lados;
}

console.log(perimetro(4,2,3,5,'Oi'))

//diferenças entre o rest e arguments: arguments pega todos os valores dos argumentos porém é um array like, e o rest pega apenas os que não forem usados porém é um array

const frutas = ['Laranja', 'Maçã', 'Banana', 'Uva', 'Manga']
const besteiras = ['Big Mac', 'Esfirra']
const comidas = [...frutas, 'Pizza', ...besteiras]
console.log(comidas)

const listaNumeros = [2,3,4,5,6,7,8,9,10]
const maiorNumero = Math.max(...listaNumeros)
console.log(maiorNumero)

const btns = document.querySelectorAll('button')
const btnsArray = [...btns]//transformando em array com operador spread
console.log(btnsArray)

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];
console.log(fraseArray)