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

//Repeat - Repete a string (n) vezes.
const frase2 = 'Ta';

frase2.repeat(5); // TaTaTaTaTa

//Replace(regexp|substr, newstr|function) - Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

//Split - Divide a string de acordo com o padrão passado e retorna uma array.
const listItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listItens.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

//TolowerCase e ToUpperCase - Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.
const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino'); // true
(sexo2.toLowerCase() === 'feminino'); // true
(sexo3.toLowerCase() === 'feminino'); // true

//Trim, TrimStart, TrimEnd - Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
