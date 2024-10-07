//Parâmetros - Nem todos os parâmetros que definimos são utilizados quando uma função é executada, devido a falta de argumentos. Por isso é importante nos prepararmos para caso estes argumentos não sejam declarados.
// function perimetroForma(lado, totalLados) {
//     return lado * totalLados;
//   }
  
//   perimetroForma(10, 4); // 40
//   perimetroForma(10); // NaN
  
// Prâmetros Padrão Default - Antes do ES6 a forma de definirmos um valor padrão para um parâmetro, era através de uma expressão.
// function perimetroForma(lado, totalLados) {
//     totalLados = totalLados || 4; // se não for definido, será igual à 4
//     return lado * totalLados;
//   }
  
//   perimetroForma(10, 3); // 30
//   perimetroForma(10); // 40

//Parâmetro Padrão (Default) ES6+ - Com o ES6 é possível definirmos o valor de um parâmetro direto na declaração do mesmo, caso o argumento não seja passado no momento da execução.
// function perimetroForma(lado, totalLados = 4) {
//   return lado * totalLados;
// }

// perimetroForma(10, 5); // 50
// perimetroForma(10); // 40

//TESTES
function perimetroQuadrado(lado, totalLados){
    return lado * totalLados;
}

console.log(perimetroQuadrado(10))