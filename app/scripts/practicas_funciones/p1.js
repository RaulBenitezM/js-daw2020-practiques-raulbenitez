const palabras = new Set();

//La variable "vacio" se utilizará al comprobar si el popup se ha dejado vacío o se ha cancelado
let vacio = false;

//Bucle para pedir palabras al usuario hasta que no escriba ninguna
do {
  let palabra = window.prompt('Escribe una palabra: ');

  //Si el popup se ha dejado vacío o se ha cancelado, se asigna TRUE a la variable "vacio",
  //sino, se guarda la palabra escrita en el conjunto creado
  if (palabra == null || palabra == '') {
    vacio = true;
  } else {
    palabras.add(palabra);
  }
} while (vacio == false);

const palabrasArray = [...palabras];
palabrasArray.sort((a, b) => a.localeCompare(b, 'es'));
palabrasArray.reverse();

for (i = 0; i < palabrasArray.length; i++) {
  document.write(palabrasArray[i] + '<br>');
}
