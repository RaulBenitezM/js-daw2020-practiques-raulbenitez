/**
 * Se comprueba si el tiempo pasado para el temporizador funciona correctamente
 * @param {*} miliseg Tiempo que ejecutará el temporizador
 */
function temporizador(miliseg) {
  return new Promise(function (resolver, rechazar) {
    setTimeout(() => {
      //resolver('Tiempo concluido');
    }, miliseg);

    setTimeout(() => {
      rechazar('El tiempo no va bien');
    }, miliseg * 2);
  });
}

let miliseg = 5000;

let promesa = temporizador(miliseg);

let contenedor = document.getElementById('contenedor');
let p = document.createElement('p');

promesa
  .then((mensaje) => (p.textContent = mensaje))
  .catch((mensaje) => (p.textContent = mensaje));

contenedor.appendChild(p);
