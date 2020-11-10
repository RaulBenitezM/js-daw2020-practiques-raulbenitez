function palabrasRepetidas(array) {
  let numRepetidas = new Map();

  //Por cada palabra introducida si existe en el mapa creado en la linea anterior, sumo 1 a su valor,
  //si no existe en el mapa, añado la palabra con valor 1
  for (let i = 0; i < array.length; i++) {
    if (numRepetidas.has(array[i])) {
      let valor = numRepetidas.get(array[i]);

      valor = valor + 1;

      numRepetidas.set(array[i], valor);
    } else {
      numRepetidas.set(array[i], 1);
    }
  }

  return numRepetidas;
}

const palabras = [];

//La variable "vacio" se utilizará para comprobar si el popup se ha dejado vacío o se ha cancelado
let vacio = false;

//Bucle para pedir palabras al usuario hasta que no escriba ninguna
do {
  let palabra = window.prompt('Escribe una palabra: ');

  //Si el popup se ha dejado vacío o se ha cancelado, se asigna TRUE a la variable "vacio",
  //sino, se guarda la palabra escrita en el array creado
  if (palabra == null || palabra == '') {
    vacio = true;
  } else {
    palabras.push(palabra);
  }
} while (vacio == false);

let numPalabrasRepetidas = palabrasRepetidas(palabras);

//Muestro por cada elemento del mapa su clave (palabra) y su valor (veces que se repite esa palabra)
numPalabrasRepetidas.forEach(function (num, palabra) {
  console.log('La palabra ' + palabra + ' se repite ' + num + ' vez/veces.');
});

module.exports.palabrasRepetidas = palabrasRepetidas;
