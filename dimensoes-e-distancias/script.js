// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens(){
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach(imagem => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function(){
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach(link => {
  if(link.offsetWidth >= 48 && link.offsetHeight >= 48){
    console.log('Boa acessibilidade');
  }else{
    console.log('Não tão boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = matchMedia('(max-width:720px)');
const menu = document.querySelector('.menu');
if(browser.matches){
  menu.classList.add('menu-mobile');
}else{
  console.log('Tela maior que 720px');
};