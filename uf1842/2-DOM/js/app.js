//1) Cogemos elementos DOM

mensaje = document.querySelector("#message");
boton = document.querySelector('#btn-send');
valorMostrado = document.querySelector("#last-message");

//Asociamos evento click (apartado 1
boton.addEventListener('click', mostrarElemento);

function mostrarElemento(){
    //Apartado 2 y 3
    if(mensaje.value){
        valorMostrado.textContent = mensaje.value;
    }
    else{
        valorMostrado.textContent = "Ningún valor introducido"
    }
    mensaje.value = '';//Limpiamos input (apartado 4)
    

}

