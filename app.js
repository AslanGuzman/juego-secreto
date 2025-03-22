let numeroSecreto = 0;
let intentos = 0;
let listaSorteada = [];
let numeroMaximo = 10;

function asignarTextoElementoHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaSorteada);
    //si se sortean todos los numeros detener
    if (listaSorteada.length == numeroMaximo){
        asignarTextoElementoHTML('p', `Ya se sortearon todos los numeros, eran: ${numeroMaximo}`);
    } else {
        //si el numero generado esta incluido en la lista
        if(listaSorteada.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaSorteada.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificacionUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`el numero de intentos es ${intentos}`);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElementoHTML('p', `Acertaste el juego en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} , el numero es: ${numeroSecreto}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElementoHTML('p', 'El numero secreto es menor');
        } else {
            asignarTextoElementoHTML('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElementoHTML('h1', 'Juguemos a adivinar un numero');
    asignarTextoElementoHTML('p', `Elija un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio, intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();