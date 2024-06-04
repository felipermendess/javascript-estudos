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
var conta6 = '100' + 50;// 10050
var conta7 = '100' - 20;// 50
var conta8 = '100' * '2';// 200

//Nan (Not a number) = Não é um número!
var conta9 = 'isso é 19' * 20;
console.log(isNaN(conta9));

//Precedência => (), *, /, +, -
var total1 = 20 + 5 * 2; 
var total2 = (20 + 5) * 2; 
var total3 = 20 / 2 * 5; 
var total4 = 10 + 10 * 2 + 20 / 2; 

//Operadores Aritméticos Unários (Incremento e Decremento)
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6
var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
//Mesma coisa para o decréscimo--x

//Outra forma de tipo unário (+ e - => tentam transformar o valor seguinte em número)
//Nan
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
