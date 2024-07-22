export default function initAccordion(){
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
