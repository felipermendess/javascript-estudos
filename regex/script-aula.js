//Regular Expression - Regexp ou Regex são expressões utilizadas para realizarmos buscas / substituições de padrões em strings. Os padrões devem ser colocados entre //. Geralmente vamos utilizá-las nos métodos .replace() e .split().
// Procura: a
// const padraoRegexp = /a/;

// const texto = 'JavaScript';
// const novoTexto = texto.replace(padraoRegexp, 'B');
// JbvaScript

//Praticamente todas as linguagens possuem uma implementação de regexp

//Literal - Utilizar um caracter literal irá realizar uma busca específica deste caracter.
// Procura: J seguido de a, v e a
// const regexp = /Java/;

// 'JavaScript'.replace(regexp, 'Type');
// TypeScript

//Flag: g - As flags irão modificar como a expressão é interpretada. Uma das mais utilizadas é a g, que significa global, ou seja, retorne todos os resultados que estiverem dentro do padrão e não apenas o primeiro. A flag deve ser colocada no final da expressão.
// Procura: Todo a
// const regexp = /a/g;

// 'JavaScript'.replace(regexp, 'i');
// JiviScript

//Flag: i - Com o i informamos que devem ser ignoradas as diferenças entre maiúsculas e minúsculas. Isso significa que /a/ irá buscar por a e A.
// Procura: Todo PE, Pe, pE e pe
// const regexp = /Pe/gi;

// 'Perdeu perdido'.replace(regexp, 'Ba');
// Bardeu Bardido

//Character Class - Se colocarmos os caracteres entre colchetes, estamos definindo uma classe. /[ab]/ irá procurar por a ou por b.
// Procura: Todo a, A, i, I
// const regexp = /[ai]/gi;

// 'JavaScript'.replace(regexp, 'u');
// JuvuScrupt

//Character Class Especiais - Podemos utilizar caracteres que não são alfanuméricos dentro da classe. Mas fique atento, pois existem diversos casos especiais para os mesmos.
// Procura: - ou .
// const regexp = /[-.]/g;

// '111.222-333-44'.replace(regexp, '');
// 11122233344

//Um ou outro - Combine caracteres literais com uma classe para buscarmos variações: Ju[nl]ho busca Julho ou Junho.
// Procura: B, seguido de r, a
// seguido de s ou z, seguido de i, l
// const regexp = /Bra[sz]il/g;

// 'Brasil é com z: Brazil'.replace(regexp, 'Prazer');
// Prazer é com z: Prazer

//De A à Z - O traço - dentro de [] pode servir para definirmos um alcance. [A-Z] irá buscar os caracteres de A à Z. [0-9] busca de 0 à 9. A tabela UNICODE é utilizada como referência para definir os caracteres dentro do alcance.
// // Busca por itens de a à z
// const regexp = /[a-z]/g;

// 'JavaScript é a linguagem.'.replace(regexp, '0');
// // J000S00000 é 0 000000000.

// // Busca por itens de a à z e A à Z
// const regexp = /[a-zA-Z]/g;

// 'JavaScript é a linguagem.'.replace(regexp, '1');
// // 1111111111 é 1 111111111.

// // Busca por números de 0 à 9
// const regexpNumero = /[0-9]/g;

// '123.333.333-33'.replace(regexpNumero, 'X');
// // XXX.XXX.XXX-XX

//Negar - Utilizando o acento circunflexo podemos negar caracteres. Ou seja, pegue tudo que não seja [^a]
// // Procura: tudo que não estiver entre a e z
// const regexp = /[^a-z]/g;

// 'Brasil é com z: Brazil'.replace(regexp, ' ');
// // rasil   com z   razil 


//Testes
const frase = 'PHP'; //sentido literal - p seguido de h e p
const novaFrase = frase.replace(/P/, 'J')
console.log(novaFrase)//JHP

const frase2 = 'JavaScript'
const novaFrase2 = frase2.replace(/a/g, 'e') //flag g - global (todas)
console.log(novaFrase2)//JeveScript

const frase3 = 'Perdeu pedido pErdendo'
const novaFrase3 = frase3.replace(/pe/gi, 'Lo')// flag i - ignora o case sensitive
console.log(novaFrase3)//Lordeu Lodido Lordendo


const regexp = /[ai]/gi; // Character class - Nesse caso procura: Todo a, A, i, I 
//seleciona a, A ou i, I - um por um e não a palavra inteira - , por causa dos parênteses


const regexp2 = /[-.]/g; // Character Class Especial: Nesse caso procura: - ou .
//podemos pesquisar por caracteres especiais
//DICA: O ponto '.' tem que estar entre [] ou \ para funcionar a seleção e ele se tornar literal

// \ - escapa caracter

const regexp3 = /Bra[sz]il/g; // Procura: B, seguido de r, a // seguido de s ou z, seguido de i, l
//nesse caso será selecionado a palavra Brasil ou Brazil - com s ou z - ou um ou outro [sz]

const regexp4 = /[A-Za-z]/g; //Seleciona de A à Z e depois a à z, não precisando de espaço para identificar a seleção;
const regexp5 = /[A-Za-z0-9-.]/g; //Selecionando praticamente tudo

//TABELA UNICODE DEFINE A SELEÇÃO E ORDEM DE CADA CARACTERE
//https://unicode-table.com/en/

const regexp6 = /[^a-z]/g; //Negando (não seleciona) as letras de a à z. - seleciona os outros mas não isso
