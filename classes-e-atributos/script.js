// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu li a');
menuItens.forEach((itens)=>{
  itens.classList.add('ativo');
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((itens)=>{
  itens.classList.remove('ativo');
})

menuItens[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const images = document.querySelectorAll('img');
images.forEach(image => {
  console.log(image.hasAttribute('alt'));
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu li:last-child a') // ou ('a[href^="http"]')
linkExterno.setAttribute('href','https://www.google.com/')
