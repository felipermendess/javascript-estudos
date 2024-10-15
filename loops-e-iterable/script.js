// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const li_s = document.querySelectorAll('li')
for(const li of li_s){
    li.classList.add('active')
}
console.log(li_s)

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
// for(const value in window){
//     console.log(value + ': ' + window[value])
// }