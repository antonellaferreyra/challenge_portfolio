//Haz tú validación en javascript acá

import {validarElemento} from "../porfolio/validador.js";

const elementosinputs = document.querySelectorAll('input');

elementosinputs.forEach(elemento => {
   elemento.addEventListener('blur', (elemento)=>{
       validarElemento(elemento.target);
   })
});

const mensaje = document.querySelector('#mensaje');
mensaje.addEventListener('blur', mensaje=>{
    validarElemento(mensaje.target);
})