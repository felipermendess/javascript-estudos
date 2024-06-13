//Height e Width - Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only.
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll
//Mesma coisa para o Width, clientWidth ...

//offsetTop e offsetLeft
const secao = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
secao.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
secao.offsetLeft;

//Getboundingclientrect() - Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const secaoAnimais = document.querySelector('.animais');

const rect = secaoAnimais.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

//Window 
window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.scrollY; // distância total do scroll vertical
window.scrollX; // distância total do scroll horizontal

// if(window.innerWidth < 600) {
//   console.log('Tela menor que 600px');
// }

//MatchMedia() - Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
