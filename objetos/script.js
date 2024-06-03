// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Felipe',
  sobrenome: 'Rodrigues Mendes Valente',
  idade: 19,
  fazFaculdade: true,
  profissao: 'Desenvolvedor',
}
console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
var dadosPessoais = {
  nome: 'Felipe',
  sobrenome: 'Rodrigues',
  idade: 19,
  fazFaculdade: true,
  profissao: 'Desenvolvedor',
  nomeCompleto(){
    return 'Felipe Rodrigues Mendes Valente';
  },
}
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'Homem' || pessoa === 'homem'|| pessoa === 'HOMEM'){
      return 'AUAUAU';
    }else{
      return 'Nada';
    }
  },
}
console.log(cachorro);
console.log(cachorro.latir('Homem'));