// //OuterHTML, innerHTML, innerText - Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.
// const menu = document.querySelector('.menu');

// menu.outerHTML; // todo o html do elemento
// menu.innerHTML; // html interno
// menu.innerText; // texto, sem tags

// menu.innerText = '<p>Texto</p>'; // a tag vai como texto
// menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// //Transversing - Como navegar pelo DOM, utilizando suas propriedades e métodos.
// const lista = document.querySelector('.animais-lista');

// lista.parentElement; // pai
// lista.parentElement.parentElement; // pai do pai
// lista.previousElementSibling; // elemento acima
// lista.nextElementSibling; // elemento abaixo

// lista.children; // HTMLCollection com os filhos
// lista.children[0]; // primeiro filho
// lista.children[--lista.children.length]; // último filho

// lista.querySelectorAll('li'); // todas as LI's
// lista.querySelector('li:last-child'); // último filho

// //Element vs Node - Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
// const list = document.querySelector('.animais-lista');

// list.previousElementSibling; // elemento acima
// list.previousSibling; // node acima

// list.firstChild; // primeiro node child
// list.childNodes; // todos os node child

// //Manipulando elementos - É possível mover elementos no dom com métodos de Node.
// const lista2 = document.querySelector('.animais-lista');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(lista2); // move lista2 para o final de contato
// contato.insertBefore(lista2, titulo); // insere a lista2 antes de titulo
// contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista2, titulo); // substitui titulo por lista2

// //Novos elementos - Podemos criar novos elementos com o método createElement()
// const animais = document.querySelector('.animais');

// const novoH1 = document.createElement('h1');
// novoH1.innerText = 'Novo Título';
// novoH1.classList.add('titulo');

// animais.appendChild(novoH1);

// //Clonar elementos - Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()
// const tittle = document.querySelector('h1');
// const titulo2 = document.querySelector('h1');
// const novoTitulo = tittle;
// // tittle, titulo2 e novoTitulo são iguais

// const cloneTitulo = tittle.cloneNode(true);
// const contact = document.querySelector('.contato');
// contact.appendChild(cloneTitulo);
// //true sinaliza para incluir os filhos
