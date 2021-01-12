const BASE_URL = 'https://reqres.in/api/users/';
const POSTMAN_URL = 'https://httpbin.org/post';

//Código principal dentro del evento load
//para asegurar la carga de los componentes
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs');
  let user = document.getElementById('user');
  let boton = document.querySelector('button');

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
    console.log(element);
  });
}

/**
 * Se hace el proceso de GET y POST para las URLs que queremos
 * @param {Number} numsecs
 * @param {Number} user
 */
function procesarFetch(numsecs, user) {
  let campoID = document.getElementById('id');
  let campoEmail = document.getElementById('email');
  let campoName = document.getElementById('name');
  let campoStatus = document.getElementById('status');

  fetch(BASE_URL + user + '?delay=' + numsecs)
    .then((response) => {
      //Creo un error si el intento de conectarse a la primera URL es erróneo
      if (response.ok == false) throw new Error(response.status);

      return response.json();
    })
    .then((mensajeJson) => {
      campoID.innerHTML = mensajeJson.data.id;
      campoEmail.innerHTML = mensajeJson.data.email;

      //Opciones para el envío de la información a la segunda URL
      const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(mensajeJson.data),
      };

      //Envío a la segunda URL con el método POST los datos que recibo de la primera URL
      fetch(POSTMAN_URL, options)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          campoName.innerHTML = json.json.first_name;
          campoStatus.innerHTML = 200;
        });
    })
    .catch((error) => {
      campoStatus.innerHTML = error.message;
    });
}
