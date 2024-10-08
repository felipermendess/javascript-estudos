//JSON - JavaScript Object Notation (JSON) é um formato de organização de dados, compostos por um conjunto de chave e valor. As aspas duplas são obrigatórias, tanto na chave quanto no valor quando este for uma string.
// {
//     "id": 1,
//     "nome": "Andre",
//     "email": "andre@origamid.com"
// }
  
//VALORES - Os valores podem ser números, strings, boolean, arrays, objetos e null.
// {
//     "id": 1,
//     "faculdade": true,
//     "pertences": [
//       "lapis",
//       "caneta",
//       "caderno"
//     ],
//     "endereco": {
//       "cidade": "Rio de Janeiro",
//       "pais": "Brasil"
//     },
//     "casado": null
//   }

//ARRAYS E OBJETOS - É comum possuirmos array's com objetos em cada valor da array. Cuidado para não colocar vírgula no último item do objeto ou array.
// [
//     {
//       id: 1,
//       aula: 'JavaScript',
//       tempo: '25min',
//     },
//     {
//       id: 2,
//       aula: 'HTML',
//       tempo: '15min',
//     },
//     {
//       id: 3,
//       aula: 'CSS',
//       tempo: '10min',
//     },
//   ];
  
//JSONPARSE E JSONSTRINGIFY - JSON.parse() irá transformar um texto JSON em um objeto JavaScript. JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.
// const textoJSON = '{"id": 1, "titulo": "JavaScript", "tempo": "25min"}';
// const textoOBJ = JSON.parse(textoJSON);

// const enderecoOBJ = {
//   cidade: 'Rio de Janeiro',
//   rua: 'Ali Perto',
//   pais: 'Brasil',
//   numero: 50,
// };
// const enderecoJSON = JSON.stringify(enderecoOBJ);

//EXEMPLO REAL - Podemos guardar por exemplo no localStorage, uma string como valor de uma propriedade. E retornar essa string como um objeto.
// const configuracoes = {
//     player: 'Google API',
//     tempo: 25.5,
//     aula: '2-1 JavaScript',
//     vitalicio: true,
//   };
  
// localStorage.configuracoes = JSON.stringify(configuracoes);
// const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);

// fetch('./dados.json')
// .then(response => response.json())
// .then(json => {
//     json.forEach(objeto => console.log(objeto.aula))
// })
  
// fetch('./dados.json')
// .then(response => response.text())
// .then(jsonText => {
//     const json = JSON.parse(jsonText)
//     console.log(json);
// })

// const configuracoes = {
//     player: 'Origamid',
//     tempo: 5.5,
//     aula: 'HTML Semântico'
// }

// const stringConfig = JSON.stringify(configuracoes);
// console.log(stringConfig);

//GUARDANDO MAIS DE UM VALOR NUMA ÚNICA CHAVE DO LOCAL STORAGE
// const configuracoes = {
//     player: 'Origamid',
//     tempo: 5.5,
//     aula: 'HTML Semântico'
// }

// localStorage.configs = JSON.stringify(configuracoes);
// console.log(JSON.parse(localStorage.configs))