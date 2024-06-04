// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var anos = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
//USANDO FOR
for(var item = 0; item < anos.length; item++){
  console.log(`O Brasil ganhou a copa de ${anos[item]}`);
};
//USANDO FOREACH
// anos.forEach(function(ano){
//   console.log(`O Brasil ganhou a copa de ${ano}`);
// });

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(var i = 0; i < frutas.length; i++){
  console.log(frutas[i]);
  if(frutas[i] === 'Pera'){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
