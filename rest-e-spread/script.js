// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
    // background = background || 'blue';
    // if(color === undefined) {
    //   color = 'red';
    // }
    const buttonElement = document.createElement('button');
    buttonElement.style.background = background;
    buttonElement.style.color = color;
    return buttonElement;
  } 
  
  const redButton = createButton();
  console.log(redButton)
  
  // Utilize o método push para inserir as frutas ao final de comidas.
  const frutas2 = ['Banana', 'Uva', 'Morango'];
  const comidas2 = ['Pizza', 'Batata'];

  comidas2.push(...frutas2)
  console.log(comidas2)