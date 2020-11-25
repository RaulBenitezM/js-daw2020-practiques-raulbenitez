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

//Separo la cookie en nombre y valor
let [nombre, valor] = document.cookie.split('=');

//Si la cookie no existe, se crea con valor 1 y expiración en un mes
//En cambio, si existe pero el valor es superior a 9, el valor se reestablece a 0 y se borra la cookie
//Por último, si no pasa nada de lo anterior, el valor de la cookie se incrementa en 1
if (nombre === '') {
  valor = 1;
  document.cookie =
    'visitas=' + valor + ';expires=' + expiracionCookie(30).toUTCString();
} else if (valor > 9) {
  valor = 0;
  document.cookie =
    'visitas=' + valor + ';expires=Sat, 01 Jan 2000 00:00:01 GMT';
} else {
  ++valor;
  document.cookie =
    'visitas=' + valor + ';expires=' + expiracionCookie(30).toUTCString();
}

let textoContador = document.createTextNode(valor);

//Muestro el valor de la cookie en el documento HTML
document.getElementById('contador').appendChild(textoContador);
