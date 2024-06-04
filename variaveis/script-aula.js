//Console
console.log('Teste');

//Regras das variáveis (nomeação) - CAMEL CASE, CASE SENSITIVE, PALAVRAS RESERVADAS, NÚMEROS
// Inválido
// var §nome;
// var function;
// var 1possuiFaculdade;
// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

//VARIÁVEIS - > Responsáveis ​por salvar dados na memória.
//var, let, const
var aula = 'Origamid';
let fruta = 'Maçã';
const faculdade = 'Unopar';

//MUTAÇÃO REGRA - É possível alterar os valores atribuídos às variáveis ​​declaradas com var e let. Porém não é possível modificar valores das declaradas com const.
var idade = 28; 
idade = 29;
// let preco = 50;
preco = 25;
// const possuiFaculdade = true;
possuiFaculdade = false;
// Retorna um erro

//Comentários => '/**/' ou //

//Hosting = São movidas para cima sem o valor atribuído ser movido.
console.log(refeicao);
var refeicao = 'Esfirra';
//Retorna undefined

//Evita repetições
var compra = 5;
var preco = 25;
var total = compra * preco;

//Sem definição = Undefined
var escola;
console.log(escola);

//VÍRGULA - Utilize a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var nome = 'André',
    idade = 28,
    possuiFaculdade = true;

//Erro ao tentar utilizar uma variável que não foi declarada.
console.log(teste);
// retorna teste is not defined
