// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let valorDaTaxa = 0;
let valorDoRecebimento = 0;
transacoes.forEach(item => {
  const valorItem = +item.valor.replace('R$ ', '');
  if(item.descricao.slice(0,4) === 'Taxa'){
    valorDaTaxa += valorItem;
  }else if(item.descricao.slice(0,4) === 'Rece'){
    valorDoRecebimento += valorItem;
  }
})
console.log(valorDaTaxa);
console.log(valorDoRecebimento);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransportes = transportes.split(';')
console.log(arrayTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlArray = html.split('span').join('a');
console.log(htmlArray);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1) ); // ou [frase.length - 1]

// Retorne o total de taxas
let totalDeTaxas = 0;
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
transacoes2.forEach(item => {
  item = item.trim().toLowerCase().slice(0,4);
  if(item === 'taxa'){
    totalDeTaxas++;
  }
})
console.log(totalDeTaxas);