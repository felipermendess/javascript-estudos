export default function initTab(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if(tabMenu.length && tabContent.length){
    //Mantendo sempre ativo:
    tabContent[0].classList.add('ativo');
    function ativaTab(index){
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      })
      const atributoDataSet = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo',atributoDataSet);
    }
    
    tabMenu.forEach((item,index) => {
      item.addEventListener('click', () => {
        ativaTab(index);
      })
    })
  }
}