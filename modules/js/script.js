import ativaScroll from "./modulos/scroll-suave.js";
import animacaoAoScroll from "./modulos/animacao-scroll.js";
import initAccordion from "./modulos/accordion.js";
import initTab from "./modulos/tabnav.js";
import { teste1, teste2 } from "./modulos/teste.js";
import * as teste from "./modulos/teste.js";//importando todos os valores em um objeto

// console.log(esseNome);//erro
console.log(teste.senha);
teste.teste1();
teste.teste2();
console.log(teste);
teste1();
teste2();
ativaScroll();
animacaoAoScroll();
initAccordion();
initTab();
console.log(this);//undefined