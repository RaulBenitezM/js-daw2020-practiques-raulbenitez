/**
 * Se comprueba si el tiempo pasado para el temporizador funciona correctamente
 * @param {*} miliseg Tiempo que ejecutará el temporizador
 */
function temporizador(miliseg) {
  return new Promise(function (resolver, rechazar) {
    setTimeout(() => {
      resolver('Tiempo concluido');
    }, miliseg);

    setTimeout(() => {
      rechazar('El tiempo no va bien');
    }, miliseg * 2);
  });
}

/**
 * Crea una cuenta atrás con los parámetros que se indican
 * @param {Number} numCuenta El número por el cual empieza a contar hacia atrás
 * @param {String} elemento Elemento HTML donde se pondrá la cuenta atrás. Por defecto: document.querySelector('body)
 * @param {Number} intervalo Intervalo en milisegundos en el que cambiará el contador. Por defecto: 1000 ms
 * @param {Function} callback Función callback que se ejecutará al terminar esta función. Por defecto: función vacía
 */
async function cuenta(
  numCuenta,
  elemento = document.querySelector('body'),
  intervalo = 1000,
  callback = () => {}
) {
  //Mientras que el contador sea mayor o igual que 0, se llama cada vez que se repite el switch
  //a la función temporizador para comprobarque funcione correctamente,
  //si esta se ejecuta sin errores mostrará el número en el documento HTML y le restará uno
  while (numCuenta >= 0) {
    let promesa = temporizador(intervalo);

    await promesa
      .then(() => {
        elemento.innerHTML = numCuenta;
        numCuenta--;
      })
      .catch((error) => {
        console.log(error);
        numCuenta = -1;
      });
  }

  callback();
}

export { temporizador, cuenta };
