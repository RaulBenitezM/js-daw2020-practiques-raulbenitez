let capa1 = document.getElementById('capa1');
let capa2 = document.getElementById('capa2');

//Cuando se empieza a arrastrar la capa1, se cambia la opacidad
capa1.addEventListener('drag', () => {
  capa1.style.opacity = '50%';
});

//Cuando se termina de arrastrar la capa1, se devuelve la opacidad que había
capa1.addEventListener('dragend', () => {
  capa1.style.opacity = '100%';
});

//Cuando capa1 se arrastra dentro de capa2, se le cambia el color de fondo a esta última
capa2.addEventListener('dragenter', () => {
  capa2.style.backgroundColor = 'red';
});

capa2.addEventListener('dragover', (event) => {
  event.preventDefault();
});

//Cuando capa1 se deja de arrastrar dentro de capa2, se le cambia el color de fondo a transparente
capa2.addEventListener('dragleave', () => {
  capa2.style.backgroundColor = 'transparent';
});

//Si se suelta la capa1 dentro de capa2, se elimina el primero y se cambia el color y texto a la capa2
capa2.addEventListener('drop', (event) => {
  event.preventDefault();

  document.body.removeChild(capa1);
  capa2.style.backgroundColor = 'yellow';
  capa2.innerHTML = '¡Lo has logrado!';
});
