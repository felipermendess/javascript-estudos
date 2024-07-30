//New Date - O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.
const agora = new Date();
agora;
// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate() // Dia
agora.getDay() // Dia da Semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Hora
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getUTCHours() - 3 // Brasília

//GetTime - O método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970.
const agora1 = new Date();
agora1.getTime(); //

// total de dias desde 1 de janeiro de 1970
const diasPassados = agora1.getTime() / (24 * 60 * 60 * 1000);

//Dias até - Podemos criar um objeto com uma data no futuro, passando uma string com o valor da data.
const agora2 = new Date();
const promocao = new Date('December 24 2018 23:59');

function converterEmDias(time) {
  return time / (24 * 60 * 60 * 1000);
}

const diasAgora = converterEmDias(agora2);
const diasPromocao = converterEmDias(promocao);

const faltam = diasPromocao - diasAgora;

//Outro exemplo 
// const agora = new Date();
// const futuro = new Date('Oct 19 2024 23:59');
// console.log(agora.getMonth());
// console.log(futuro);

// function transformarDias(tempo){
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(diasFuturo - diasAgora);