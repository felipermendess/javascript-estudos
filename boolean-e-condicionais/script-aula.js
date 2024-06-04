//Boolean = True or False
var possuiCarro = true; //1
var possuiMoto= false; // 0

//Condicionais If, Else If e Else
if(possuiCarro){
  console.log('Pode dirigir.');
}else if(possuiMoto){
  console.log('Pode dirigir.');
}else{
  console.log('Não pode dirigir.');
}

//Valores que retornam false
if(false)
if(0) ou -0
if(NaN)
if(null)
if(undefined)
if('') ou ("") (``)

//Valores que retornam true
if(true)
if(1)
if(' ')
if('Felipe')
if(-5)
if({})

//Operador Lógico (!) = Inverte
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
// !! -> Verifica se uma expressão é true or false
if(!!' ') // true
if(!!'') // false

//Operadores de comparação 
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//Operadores de comparação == Não tão estrita | === Estrita
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//Operadores Lógicos (&&) e -> Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

//Operadores Lógicos (||) ou -> Retorna o primeiro valor true que encontrar
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

//Switch - Como switch você pode verificar se uma variável é igual a valores diferentes usando o case. Caso ela seja igual, você pode fazer alguma coisa e usar a palavra chave break; para cancelar a continuação. O valor de inadimplência ocorrerá caso nenhuma das anteriores seja verdadeira.
var diaDaSemana = '4';
switch(diaDaSemana){
  case '1':
    console.log('Domingo');
    break;
  case '2':
    console.log('Segunda');
    break;
  case '3':
    console.log('Terça');
    break;
  case '4':
    console.log('Quarta');
    break;
  case '5':
    console.log('Quinta');
    break;
  case '6':
    console.log('Sexta');
    break;
  case '7':
    console.log('Sábado');
    break;
  default:
    console.log('[ERRO]');
    break;
}

