//Si existe ya un nombre guardado en el localStorage se pondrá en el párrafo
//Si no existe no se pondrá nada
let pNombre = document.getElementById('nombre');

pNombre.textContent = sessionStorage.getItem('nombre');

let boton = document.getElementById('boton');

boton.addEventListener('click', (ev) => {
  let inputNombre = document.getElementById('inputNombre');

  sessionStorage.setItem('nombre', inputNombre.value);
});
