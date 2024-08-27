// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener("click", buttonCepClicked);

function buttonCepClicked(event){
    event.preventDefault();
    const cep = inputCep.value;
    buscarCep(cep);
}

function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => resultadoCep.innerText = body)
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const btcResultado = document.querySelector('.btcResultado');

function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcResultado.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
    })
}
// setInterval(fetchBtc, 1000 * 30);
fetchBtc();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const resultadoPiada = document.querySelector('.resultadoPiada');
const btnProxima = document.querySelector('.proxima');

function buscarPiada(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(body => resultadoPiada.innerText = body.value)
}
btnProxima.addEventListener('click', buscarPiada);
buscarPiada();