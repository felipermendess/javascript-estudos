const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length){
  //Mantendo sempre ativo:
  tabContent[0].classList.add('ativo');
  function ativaTab(index){
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    })
    tabContent[index].classList.add('ativo');
  }
  
  tabMenu.forEach((item,index) => {
    item.addEventListener('click', () => {
      ativaTab(index);
    })
  })
}

