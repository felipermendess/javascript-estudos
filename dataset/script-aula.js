//HTMLElement - Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.
const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1);// [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

//Dataset - dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.
// Ambos os valores selecionam a mesma div acima.
const div = document.querySelector('[data-cor]');
// div = document.querySelector('[data-cor="azul"]');
// const div = document.querySelector('div');

//acessando valores
div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'

//adicionando novo valor
div.dataset.height = 1000;

//deletando valor
delete div.dataset.height

console.log(div.dataset);

//Data Atributes - Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.
const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});
// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data

//Data vs Class - A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

//Nomenclatura - Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.
const div = document.querySelector('[data-anima-scroll]');
div.dataset;
// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

