/**
 * Muestra las palabras del array en una lista HTML
 * @param {Array} palabras Palabras para mostrar
 */
function mostrarPalabras(palabras) {
  let ul = document.getElementById('lista');

  for (let palabra of palabras) {
    let li = document.createElement('li');
    li.textContent = palabra;
    ul.appendChild(li);
  }
}

/**
 * Borrar la lista UL existente en el documento HTML
 */
function borrarLista() {
  let ul = document.getElementById('lista');
  let lis = document.querySelectorAll('#lista li');

  for (let li of lis) {
    ul.removeChild(li);
  }
}

let palabras = [
  'Botella',
  'Torre',
  'Mano',
  'Basura',
  'Teclado',
  'Agua',
  'Pala',
  'Ratón',
  'Pantalla',
  'Mesa',
];

mostrarPalabras(palabras);

//A los 3 segundos de que la página se haya cargado, le pregunto al usuario si quiere ordenar las palabras
//Si pulsa "Aceptar", ordeno la lista, borro la lista y muestro la lista ordenada,
//en cambio, si cancela, no se hace nada.
setTimeout(() => {
  if (confirm('¿Quieres ordenar las palabras?') == true) {
    palabras.sort((a, b) => a.localeCompare(b, 'es'));
    borrarLista();
    mostrarPalabras(palabras);
  }
}, 3000);
