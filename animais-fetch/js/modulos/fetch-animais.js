import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais(){
  async function fetchAnimais(url){
    try{
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
    
      animaisJSON.forEach(animal => {
        const divAnimal = criarAnimal(animal);
        const numerosGrid = document.querySelector('.numeros-grid');
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    }catch(erro){
      console.log(erro);
    }
  }
  
  function criarAnimal(animal){
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }
  
  fetchAnimais('./animaisapi.json');
}

