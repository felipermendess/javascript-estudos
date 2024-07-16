// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, paragrafo) => {
  return acc + paragrafo.innerText.length
},0);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function elementos(tag, classe, conteudo){
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}
console.log(elementos('li','intro','Introdução em listas'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const classeConstante = elementos.bind(null, 'h1', 'titulo');
const cursoJS = classeConstante('Cursos de Javascript');
const cursoReact = classeConstante('Cursos de React');
console.log(cursoJS,cursoReact);