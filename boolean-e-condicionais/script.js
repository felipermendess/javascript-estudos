// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19;
var idadeDoPai = 59;

if(minhaIdade > idadeDoPai){
  console.log('É maior');
}else if(minhaIdade === idadeDoPai){
  console.log('É igual');
}else{
  console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);//3
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//True
var idade = 28;//True
var possuiDoutorado = false;//False
var empregoFuturo;//False
var dinheiroNaConta = 0;//False
console.log(!!nome, !!idade, !!possuiDoutorado, !! empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
console.log(china > brasil);
console.log(china < brasil);
console.log(china == brasil);
console.log(china === brasil);
console.log(china != brasil);
console.log(china !== brasil);

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}//Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}//Cão