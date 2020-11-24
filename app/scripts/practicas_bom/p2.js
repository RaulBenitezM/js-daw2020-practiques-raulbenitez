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

let [nombre, valor] = document.cookie.split('=');

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

document.getElementById('contador').appendChild(textoContador);
