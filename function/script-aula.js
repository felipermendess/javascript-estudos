//Function - Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.
function areaQuadrado(lado) {
  return lado * lado;
}

const perimetroQuadrado = new Function('lado', 'return lado * 4');

//Propriedades - Function.length retorna o total de argumentos da função. Function.name retorna uma string com o nome da função.
function somar(n1, n2) {
  return n1 + n2;
}

somar.length; // 2
somar.name; // 'somar'
