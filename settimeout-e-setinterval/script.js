//Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarClasse(){
  setInterval(() => {
    document.body.classList.toggle('ativo');
  }, 2000)
}

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const resetar = document.querySelector('.resetar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
resetar.addEventListener('click', resetarTempo);

let i = 0;
let timer;

function iniciarTempo(){
  timer = setInterval(() => {
   tempo.innerHTML = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo(){
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo(){
  tempo.innerHTML = 0;
  i = 0;
}