function initTab(){
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
}
initTab();

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const classeAtivo = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add(classeAtivo);
    accordionList[0].nextElementSibling.classList.add(classeAtivo);

    function ativaLista(){
      this.classList.toggle(classeAtivo);
      this.nextElementSibling.classList.toggle(classeAtivo);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', ativaLista)
    })
  }
}
initAccordion();

function ativaScroll(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollToSection(e){
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    //MANEIRA ALTERNATIVA
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection);
  })
}
ativaScroll();