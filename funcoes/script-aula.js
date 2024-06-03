//Função Sintaxe -> Obrigatório parênteses para executar uma função!
function areaDoQuadrado(lado){
  return lado * lado;
}
console.log(areaDoQuadrado(3));

//Parâmetros e Argumentos
function imc(peso,altura){ 
  return peso / (altura * altura);
} // Peso e altura são os parâmetros
console.log(imc(68, 1.73));// 68 e 1.73 são os argumentos

//Argumentos podem ser funções
function mostrarMsgNoConsole(){
  console.log('oi');
}
addEventListener('click', mostrarMsgNoConsole); // Argumentos sendo funções

//Função Anônima => Função sem denominação

//Não é obrigatório passar um parâmetro ou argumento
function corFavorita(cor){
  if(cor === 'Azul'){
    console.log('Azul é daora');
  }else if(cor === 'Vermelho'){
    console.log('Vermelho é legal');
  }else{
    console.log('Cor não encontrada');
  }
}
corFavorita();//Cor não encontrada

//Função sem return = undefined

// function semRetorno(peso,altura){
//   var imc = peso / (altura ** 2);
//   console.log(imc);
// }
// console.log(semRetorno(70, 1.76));

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

//Valores retornados -> Uma função pode retornar qualquer tipo de dado e até outras funções.
function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';//STRING
  } else if(idade >= 60) {
    return true;//BOOLEAN
  } else {
    return false;//BOOLEAN
  }
}

//Escopo -> Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;//escopo
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
console.log(totalPaises); // erro, totalPaises não definido

//Escopo Léxico -> Funções conseguem acessar variáveis que foram criadas no contexto pai
var profissao = 'Designer';//Escopo léxico

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
 
dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

//Hoisting -> Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória
imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {//Hoisting 
  const imc = peso / (altura ** 2);
  console.log(imc);
}
