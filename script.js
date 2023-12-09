//Acá el juego selecciona un nro al azar para que adivines
let nroAzar = Math.floor(Math.random()*100) + 1 
/*aqui si es 0 me da 1 y si es 99 me da 100 - porque sino me daria siempre un nro entre 0 y 99*/
let nroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')

//esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado(){
    let numeroIngresado = parseInt(nroEntrada.value) //se hace un parseInt porq los inputs siempre devuelven un string, entonces se pone nroEntrada.value porq es el valor de lo que devuelve el id
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){ //isNaN significa que si no es  un numero
        mensaje.textContent = 'Por favor, introduce un número válido entre el 1 y el 100'
        mensaje.style.color = 'black'
        return //con return si se cumple la condicion automaticamente se finaliza la funcion
    }

    if (numeroIngresado === nroAzar){
        mensaje.textContent = '¡Felicitaciones!, Has adivinado el número!'
        mensaje.style.color = 'green'
        nroEntrada.disabled = true //esto es par que no se puda cambiar el nro cuando ya ganamos
    }else if(numeroIngresado < nroAzar){
        mensaje.textContent = '¡Más alto! El número es mayor al que elegiste'
        mensaje.style.color = 'red'
    }else{
        mensaje.textContent = '¡Más bajo! El número es menor al que elegiste'
        mensaje.style.color = 'red'
    }
}