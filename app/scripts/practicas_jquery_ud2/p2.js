$(() => {
  let $switcher = $('.switcher');

  let $botonesAntiguos = $switcher.find('button');

  //Borro los botones que vienen por defecto en el html
  $botonesAntiguos.remove();

  let botonesNuevos = [
    '<button data-style="default" class="selected">Defecto</button>',
    '<button data-style="narrow">Estrecho</button>',
    '<button data-style="large">Grande</button>',
  ];

  for (botonNuevo of botonesNuevos) {
    $switcher.append(botonNuevo);
  }

  let $botones = $switcher.find('button');

  //Event listener para cuando el ratón entre en el "switcher", el fondo de este se ponga verde
  //y cuando salga, el fondo se ponga por defecto
  $switcher.hover(
    function () {
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover');
    }
  );

  //Creo un event listener para cuando se haga click dentro del "switcher" aparezcan los botones o desaparezcan
  $switcher.click(function (event) {
    event.preventDefault();

    $botones.toggleClass('hidden');
  });

  //Creo un event listener para cuando se haga click en un boton del "switcher", el "switcher" no desaparezca
  //y dependiendo del boton que sea (aunque hayan muchos botones) se ponga el estilo que indica este boton
  $botones.click(function (event) {
    event.stopPropagation();

    let estilo = $(this).data('style');

    let main = $('main');

    if (estilo == 'default') {
      main.removeClass();
      $botones.removeClass();
      $(this).addClass('selected');
    } else {
      main.removeClass();
      main.addClass(estilo);
      $botones.removeClass();
      $(this).addClass('selected');
    }
  });

  //Hago un click automáticamente cuando se acceda a la página para desactivar los botones por defecto
  $switcher.click();
});
