export function validarElemento(elemento){
    const tipodato = elemento.dataset.tipo;
    if (elemento.validity.valid && verificarElementoVacio(elemento)){
        elemento.parentElement.classList.remove('formcontato__box');
        elemento.parentElement.querySelector(".formcontato__error").innerHTML="";
    }
    else{
        elemento.parentElement.classList.add('formcontato__box');
        if (mensajeError(tipodato,elemento)==undefined)
            elemento.parentElement.querySelector(".formcontato__error").innerHTML=`El campo ${tipodato} no puede estar en blanco`;
        else
            elemento.parentElement.querySelector(".formcontato__error").innerHTML=mensajeError(tipodato,elemento);
    }
}
const tiposError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
    "badInput",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "tooLong",
    "tooShort",
    "valid"
];
const mensajesdeerror = {
    'nombre':{
        'valueMissing': 'El campo nombre no puede estar vacio'
    },
    'email':{
        'valueMissing': 'El campo Correo Electronico no puede estar vacio',
        'typeMismatch': "El Correo Electronio no es un valido debe contener '@'"
    },
    'asunto':{
        'valueMissing': 'El campo Asunto no puede estar vacio',
    },
    'mensaje':{
        'valueMissing': 'El campo Mensaje no puede estar vacio',
    }
};

function verificarElementoVacio(elemento){
    return elemento.value.trim().length>0;
}
function mensajeError(tipodato,elemento){
    let mensaje = "";
    tiposError.forEach(error=>{
        if (elemento.validity[error]){
            mensaje = mensajesdeerror[tipodato][error];
        }
    })
    return mensaje;
}