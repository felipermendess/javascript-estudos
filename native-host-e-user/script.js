// Liste 5 objetos nativos
Object 
Function
Array
Number
String 

// Liste 5 objetos do browser
HTMLCollection
Window
History
Document
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if(typeof document.webkitHidden !== 'undefined'){
  console.log('Existe');
}else{
  console.log('Não existe');
}