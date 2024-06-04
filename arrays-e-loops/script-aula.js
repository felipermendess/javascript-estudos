//ARRAYS - É um grupo de valores geralmente relacionado. Servem para salvar valores diferentes em uma única variável.
var videoGames = ['PS4', 'Xbox', 'Nintendo', 'Switch'];
//Acesse um elemento do array utilizando[n]
console.log(videoGames[0]);//PS4
console.log(videoGames[3]);//SWITCH

//MÉTODOS E PROPRIEDADES DE UMA ARRAY
videoGames.pop();// Remove o último item e retorna ele
console.log(videoGames);
videoGames.push('PSP'); // Adiciona ao final da array
console.log(videoGames);
console.log(videoGames.length)//4

//FOR LOOP - Fazem algo repetidamente até que uma condição seja atingida. O for loop possui 3 partes, início, condição e incremento.
for(var i = 0; i <= 10; i++){
  console.log(i);
}//Retorna de 0 a 10.

//WHILE LOOP
var index = 0;
while(index <= 10){
  console.log(index);
  index++;
}

//For loop é mais comum.
//Break
for(var i = 0; i < videoGames.length; i++){
  console.log(videoGames[i]);
  if(videoGames[i] === 'Xbox'){
    break;//irá parar o loop caso encontre.
  }
}

//ForEach - forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like).
var frutas = ['Maçã','Banana','Pera','Uva'];
frutas.forEach(function(fruta){
  console.log(fruta);
})
//Podemos passar os seguintes parâmetros item, index e array.