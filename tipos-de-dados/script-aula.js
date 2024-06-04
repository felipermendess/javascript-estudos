//Tipos de dados
var nome = 'Felipe'; //String
var idade = 19; //Number
var homem = true; //Boolean
var time; //Undefined
var comida = null; //Null
var simbolo = Symbol(); //Symbol
var novoObjeto = {}; //Object

//Typeof = Verifica o tipo de dado
console.log(typeof homem);
//PS.: NULL = OBJECT
console.log(typeof comida);

//Concatenação
var frase1 = 'Hoje é';
var frase2 = 'terça-feira.';
var frase = frase1 + ' ' + frase2;
console.log(frase)

//Aspas
var aspasSimples = '';
var aspasDuplas = "";
var aspasSimplesNaFrase = ' "" ';
var aspasDuplasNaFrase = " ' ' ";

//Template String
var templateString = `${nome}`;