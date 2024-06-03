// Crie uma função para verificar se um valor é Truthy
function verificarValor(value){
  return !!value;
  // if(value){
  //   return true;
  // }else{
  //   return false;
  // }
}
console.log(verificarValor(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado + lado + lado + lado;//lado * 4
}
console.log(perimetroQuadrado(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('Felipe', 'Rodrigues Mendes Valente'));

// Crie uma função que verifica se um número é par
function par(numero){
  if(numero % 2 === 0){
    return 'É par';
  }else{
    return 'Não é par';
  }
}
console.log(par(3));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retorandoTipo(tipo){
  return (typeof tipo);
}
console.log(retorandoTipo(null));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function mostrarNomeCompleto(){
  const nomeCompleto = 'Felipe Rodrigues Mendes Valente';
  console.log(nomeCompleto);
}
addEventListener('scroll', mostrarNomeCompleto);

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
