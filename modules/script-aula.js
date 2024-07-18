//Módulos
// Manutenção

// Dividir o código em diferentes arquivos com funções específicas (módulos) facilita a manutenção.

// Compartilhamento

// O compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico.

// Nativo no ES6+

// Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outras. Mas agora os módulos são nativos.

//Modules ES6

// Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

// <script type="module" src="js/script.js"></script>

// // arquivo scroll-suave.js
// export default function scrollSuave() {
//   ...
// };

// // arquivo script.js
// import scrollSuave from './scroll-suave.js';

// scrollSuave();

// Geralmente um valor por módulo.

//Named Sports
// Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

// // arquivo scroll.js
// export function scrollSuave() {
//   ...
// };
// export function scrollAnimacao() {
//   ...
// };

// // arquivo script.js
// import { scrollSuave, scrollAnimacao } from './scroll.js';
// scrollSuave();
// scrollAnimacao();

// // Importe todos os valores em um objeto
// import * as scroll from './scroll.js';
// scroll.scrollSuave();
// scroll.scrollAnimacao();
