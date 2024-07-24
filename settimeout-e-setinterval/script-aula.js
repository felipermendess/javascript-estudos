//SetTimeout - setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. Não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.
function espera(texto) {
  console.log(texto);
}
setTimeout(espera, 1000, 'Texto inserido');

setTimeout(() => {
  console.log('Olá mundo');
}, 2000);

//Imediato - Se não passarmos o argumento de tempo ele irá assumir o valor 0 e entrará na fila imediatamente para ser executado. Podemos passar uma função anônima diretamente com argumento.
setTimeout(() => {
  console.log('Após 0s?');
});

//Loops e SetTimeout - Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles serão adicionados à Web Api praticamente no mesmo tempo. Um evento de setTimeout não espera o tempo do anterior acabar para iniciar.
for(let i = 0; i < 5; i++){
  setTimeout(() => {
    console.log(i);
  }, 1000)
}

//Corrigindo o loop - Agora ele está multiplicando o tempo por i. Assim o primeiro aparecerá em 0ms, o segundo em 300ms, o terceiro em 600ms e assim em diante.
for(let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300 * i);
}

//This e Window - setTimeout é um método do objeto Window. O valor de this dentro do mesmo callback é uma referência ao seu objeto no caso Window. Arrow function resolve o erro.
//Arrow Function - Quando utilizamos uma Arrow Function como callback, o contexto de this passa a ser do local onde o setTimeout foi iniciado.
const btn = document.querySelector('button');

btn.addEventListener('click', handleClick);

function handleClick(){
  setTimeout(() => {
    console.log(this)
    this.classList.add('ativo');
  },1000)
}

//SetInterval - setInterval(callback, tempo, arg1, arg2, ...), irá ativar o callback toda vez que a quantidade de tempo passar.
function loop(texto) {
  console.log(texto);
}
// setInterval(loop, 300, '300ms');

let i = 0 
const meuLoop = setInterval(() => {
  console.log(i++);
  if(i > 7){
    clearInterval(meuLoop);
  }
}, 300)

//ClearInterval - clearInterval(var), podemos parar um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.

// let i = 0 
// const meuLoop = setInterval(() => {
//   console.log(i++);
//   if(i > 7){
//     clearInterval(meuLoop);
//   }
// }, 300)