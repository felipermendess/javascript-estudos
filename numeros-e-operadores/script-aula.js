//Números
var idade = 19;
var pi = 3.14;
var expressao = 2e12; //Total de zeros após o 'e'

//Operadores Aritméticos
//Soma
var conta = 10 + 10;
//Subtração
var conta1 = 20 - 20;
//Multipliação
var conta2 = 2 * 30;
//Divisão
var conta3 =  20 / 5;
//Expoente
var conta4 = 2 ** 5;
//Módulo
var conta5 = 14 % 2;

//Operadores Aritméticos (Strings)
var conta6 = '100' + 50;
var conta7 = '100' - 20;
var conta8 = '100' * '2';

//Nan (Not a number)
var conta9 = 'isso é 19' * 20;
console.log(isNaN(conta9));

//Precedência => (), *, /, +, -
var total1 = 20 + 5 * 2; 
var total2 = (20 + 5) * 2; 
var total3 = 20 / 2 * 5; 
var total4 = 10 + 10 * 2 + 20 / 2; 

//Operadores Aritméticos Unários (Incremento e Decremento)
var incremento = 5;
// console.log(incremento++);//Depois
console.log(++incremento);//Antes
console.log(incremento);

var decremento = 4;
// console.log(decremento--);//Depois
console.log(--decremento);//Antes
console.log(decremento);

//Outra forma de tipo unário (+ e - => tentam transformar o valor seguinte em número)
//Nan
var frase = 'teste';
console.log(+frase);
console.log(-frase);

var anos = '19';
console.log(+anos);//19
console.log(-anos);//-19

var escola = true;
console.log(+escola);//1
console.log(-escola);//-1