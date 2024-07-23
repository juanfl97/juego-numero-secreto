let numeroSecreto= 0;
let numeroDeIntentos= 0;
let listaNumeroSorteados= [];
let numeroMaximo= 10;
let MaximosIntentos=3;

function asignarTextoElemento(elemento, texto){
    let elementoHTML =document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}




function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero en ${numeroDeIntentos} ${(numeroDeIntentos===1)?'vez':'veces'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      // el usuario no acertó  
        if(numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento('p','el numero es menor');
        }else {
            asignarTextoElemento('p','el numero es mayor');
        }if(numeroDeIntentos==MaximosIntentos){
            asignarTextoElemento('p','haz alcanzado el limite de intentos');
            document.getElementById('reiniciar').removeAttribute('disabled');

        }
        numeroDeIntentos ++;
        limpiarCaja();
    }
    return;
}       

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados); 
    // si ya sorteamos todos los numeros  
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los numeros posibles');

    } else {
        // si el numero generado esta incluido en la lista
        if(listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'JUEGO DEL NUMERO SECRETO');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    numeroDeIntentos=1;
    console.log(numeroSecreto);  
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

}

condicionesIniciales();