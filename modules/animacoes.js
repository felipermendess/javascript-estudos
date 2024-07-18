function initTab(){
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
initTab();

function initAccordion(){
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
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
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
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

function animacaoAoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll(){
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSection = (sectionTop - windowMetade) < 0;
        if(isSection){
          section.classList.add('ativo');
        }else{
          section.classList.remove('ativo');
        }
      })
    }
    animaScroll();
  
    window.addEventListener('scroll', animaScroll);
  }
}
animacaoAoScroll();