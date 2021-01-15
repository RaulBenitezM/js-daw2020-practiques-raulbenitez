/**
 * Temporizador para la cuenta atrás
 * @param {Number} ms Milisegundos para el temporizador
 */
function temporizador(ms) {
  return new Promise(function (resolver, rechazar) {
    setTimeout(() => {
      resolver('Tiempo concluido');
    }, ms);
  });
}

/**
 * Crea la notificación y el evento de "click" que lo lleva a la página del video
 */
function mostrarNotifVideo() {
  let notif = new Notification('Nuevo vídeo', {
    body: 'Se ha publicado un nuevo vídeo!',
  });

  notif.addEventListener('click', (ev) => {
    window.open('/app/13.apis.p2-video.html');
  });
}

/**
 * Se hace una cuenta atrás desde 5.
 * Cuando llega a 0 se llama a la función mostrarNotifVideo().
 */
async function cuentaAtras() {
  let temp = document.getElementById('temp');
  let num = 5;
  temp.innerHTML = num;

  while (num > 0) {
    let promesa = temporizador(1000);

    await promesa
      .then(() => {
        num--;
        temp.innerHTML = num;
      })
      .catch((error) => {
        console.log(error);
        num = -1;
      });
  }

  mostrarNotifVideo();
}

//Se pide permiso al usuario para recibir notificaciones solo si hace falta
let permisoNotif = Notification.permission;

if (permisoNotif == 'default') {
  Notification.requestPermission();
}

cuentaAtras();
