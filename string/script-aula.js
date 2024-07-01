//String - É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.
const comida1 = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

//Length - Propriedade com o total de caracteres da string.
const comida = 'Pizza';
const frase1 = 'A melhor comida';

comida.length; // 5
frase1.length; // 15

comida[0] // P
frase1[0] // A
frase1[frase1.length - 1] // a

//CharAt(n) - Retorna o caracter de acordo com o index de (n).
const linguagem1 = 'JavaScript';

linguagem1.charAt(0); // J
linguagem1.charAt(2); // v
linguagem1.charAt(linguagem1.length - 1); // t

//Concat - Concatena as strings e retorna o resultado.
const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!');

//Includes - Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

//EndsWith e StartsWith - Procura pela string exata dentro de outra string. A procura é case sensitive.
const fruta1 = 'Banana';

fruta1.endsWith('nana'); // true
fruta1.startsWith('Ba'); // true
fruta1.startsWith('na'); // false

//Slice - Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

//Substring - Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.
const language = 'JavaScript';
language.substring(3,5); // aS
language.substring(0,4); // Java
language.substring(4); // Script
language.substring(-3); // JavaScript

//IndexOf e LastIndexOf - Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

//PadStart e PadEnd - Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....

