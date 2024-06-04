//Console
console.log('Teste');

//Regras das variáveis (nomeação)
//CAMEL CASE
//CASE SENSITIVE
//PALAVRAS RESERVADAS
//NÚMEROS

// Inválido
// var §nome;
// var function;
// var 1possuiFaculdade;
// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

//VARIÁVEIS - > 
//Responsáveis ​por salvar dados na memória.
//var, let, const (Mutação regra)
var aula = 'Origamid';
aula = 'Origamid 2.0';
console.log(aula);
let fruta = 'Maçã';
const faculdade = 'Unopar';

//Comentários => '/**/' ou // 

//Hosting = São movidas para cima sem o valor atribuído ser movido.
//var refeicao;
console.log(refeicao);
var refeicao = 'Esfirra';

//Evita repetições
var compra = 5;
var preco = 25;
var total = compra * preco;

//Sem definição = Undefined
var escola;
console.log(escola);

//VÍRGULA 
//Utilize a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
var nome = 'André',
    idade = 28,
    possuiFaculdade = true;


//Erro ao tentar utilizar uma variável que não foi declarada.
console.log(teste);
// retorna teste is not defined
