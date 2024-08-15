//SELECIONANDO O QUE A GENTE PRECISA USAR
const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", controlChange);

//OBJETO PARA SEPARAR AS PROPRIEDADES 
const controlStyle = {
  element: btn,
  backgroundColor(value){
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value + 'px';
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  color(value){
    this.element.style.color = value;
  },
  texto(value){
    this.element.innerText = value;
  },
  border(value){
    this.element.style.border = value;
  },
  borderRadius(value){
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value){
    this.element.style.fontFamily = value;
  },
  fontSize(value){
    this.element.style.fontSize = value + 'rem';
  }
}

//FUNÇÃO QUE VAI VERIFICAR MUDANÇAS
function controlChange(event){
  const name = event.target.name;
  const value = event.target.value;

  //ATIVANDO OBJETO COM NAME E VALUE
  controlStyle[name](value);

  //ATIVANDO FUNÇÃO DO CSS
  showCSS()
}

//FUNÇÃO QUE VAI MOSTRAR O CSS SELECIONADO
function showCSS(){
  //CSSTEXT DO BTN É UM MÉTODO QUE RETORNA EXATAMENTE A PROPRIEDADE CSS
  cssText.innerHTML = "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}