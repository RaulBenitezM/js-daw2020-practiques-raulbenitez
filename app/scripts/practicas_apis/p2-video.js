let video = document.getElementById('video');
let pDuracion = document.getElementById('duracion');

//Cuando se haga click izquierdo en el video se pausará o reanudará.
video.addEventListener('click', (ev) => {
  if (video.paused) video.play();
  else video.pause();
});

//Cuando se haga click derecho se mostrarán los minutos y segundos que dura el vídeo
//en un párrafo situado debajo del vídeo
video.addEventListener('contextmenu', (ev) => {
  ev.preventDefault();
  let vidDuracion = parseInt(video.duration);
  let minutos = '';
  let segundos = '';

  if (vidDuracion > 59) {
    minutos = Math.floor(vidDuracion / 60);
    segundos = vidDuracion % 60;
  } else {
    minutos = 0;
    segundos = vidDuracion;
  }

  pDuracion.innerHTML = 'Duracion: ' + minutos + ':' + segundos;
});
