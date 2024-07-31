//Forms - É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.

{/* <form name="contato" id="contato">
  <label for="nome">Nome</label>
  <input type="text" name="nome" id="nome">
  <label for="email">Email</label>
  <input type="email" name="email" id="email">
  <label for="mensagem">Mensagem</label>
  <textarea name="mensagem" id="mensagem"></textarea>
</form> */}

// document.forms; // lista com os formulários
// document.forms.contato; // form com nome contato
// document.forms.contato.elements; // elementos
// document.forms[0].elements[0].value; // valor do primeiro

//Values - A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

// const form = document.getElementById('contato');
// function handleKeyUp(event) {
//   console.log(event.target.value);
// }
// form.addEventListener('keyup', handleKeyUp);

