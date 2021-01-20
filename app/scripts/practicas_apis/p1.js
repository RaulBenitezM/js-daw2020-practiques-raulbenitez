let pNombre = document.getElementById('nombre');
const inputNombre = document.getElementById('inputNombre');

//Si existe ya un nombre guardado en el localStorage se pondrá en el párrafo
//Si no existe no se pondrá nada
pNombre.textContent = sessionStorage.getItem('nombre');

inputNombre.addEventListener('keypress', (ev) => {
  if (ev.key == 'Enter') sessionStorage.setItem('nombre', inputNombre.value);
});

// sessionStorage.setItem('nombre', inputNombre.value);
