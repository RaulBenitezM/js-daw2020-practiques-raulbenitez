/**
 * Cambia la imagen de fondo del div general
 */
function cambiarImagen() {
  let div = document.getElementById('imagen');

  div.style.backgroundImage = 'url("https://source.unsplash.com/random")';
}

//Cuando se pulsen las teclas ALT+F12, se llamará a una función que cambia la imagen de fondo
window.addEventListener('keyup', (letra) => {
  if (letra.altKey == true && letra.key == 'F12') cambiarImagen();
});
