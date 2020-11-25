/**
 * Devuelve la fecha exacta de los dias que se pasa por parámetro
 * @param {Number} dias Dias que se tienen que pasar para la fecha que se quiere
 * @return {Date} Fecha exacta de los dias que se han pasado
 */
function expiracionCookie(dias) {
  let hoy = new Date();
  let expiresMiliseconds = hoy.getTime() + 1000 * 60 * 60 * 24 * dias;
  let expires = new Date(expiresMiliseconds);

  return expires;
}

//Separo las cookies para crear un array de todas
let cookies = document.cookie.split(';');
let nombreVisitas = '';
let valorVisitas;

//Busco la cookie llamada "visitas" y la guardo
for (cookie of cookies) {
  let [nombre, valor] = cookie.split('=');

  if (nombre == 'visitas') {
    nombreVisitas = nombre;
    valorVisitas = valor;
  }
}

//Si la cookie no existe, se crea con valor 1 y expiración en un mes
//En cambio, si existe pero el valor es superior a 9, el valor se reestablece a 0 y se borra la cookie
//Por último, si no pasa nada de lo anterior, el valor de la cookie se incrementa en 1
if (nombreVisitas === '') {
  valorVisitas = 1;

  document.cookie =
    'visitas=' +
    valorVisitas +
    ';expires=' +
    expiracionCookie(30).toUTCString();
} else if (valorVisitas > 9) {
  valorVisitas = 0;

  document.cookie =
    'visitas=' + valorVisitas + ';expires=Sat, 01 Jan 2000 00:00:01 GMT';
} else {
  ++valorVisitas;

  document.cookie =
    'visitas=' +
    valorVisitas +
    ';expires=' +
    expiracionCookie(30).toUTCString();
}

let textoContador = document.createTextNode(valorVisitas);

//Muestro el valor de la cookie en el documento HTML
document.getElementById('contador').appendChild(textoContador);
