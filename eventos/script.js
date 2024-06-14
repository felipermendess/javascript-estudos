// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    linksInternos.forEach(item => {
      item.classList.remove('ativo')
    })
    e.currentTarget.classList.add('ativo');
  })
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');

elementos.forEach(elemento => {
  elemento.addEventListener('click', (e) => {
    console.log(e.currentTarget);
  })
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const elementos2 = document.querySelectorAll('body *');

// elementos2.forEach(elemento => {
//   elemento.addEventListener('click', (e) => {
//     e.currentTarget.remove();
//   })
// })


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const body = document.body;

window.addEventListener('keydown', (e) => {
  if(e.key === 't'){
    body.style.fontSize = '28px';
  }
})