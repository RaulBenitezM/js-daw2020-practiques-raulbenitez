$(() => {
  var $p = $('p');

  //Recojo en un array todas las palabras del párrafo
  var palabrasP = $p.html().split(' ');

  //Vacío el párrafo para después poner el mismo párrafo con cambios
  $p.html('');

  //Por cada palabra recogida miro si esta no es un espacio y si esto es correcto la añado al párrafo vacio con etiquetas <span>
  for (palabra of palabrasP) {
    if (palabra.length > 0) {
      $p.append('<span>' + palabra.trim() + '</span> ');
    }
  }

  //Creo un event listener para cada etiqueta span (en este caso, para cada palabra del párrafo)
  //para cuando se pulse en una palabra, esta se resalte en negrita y el fondo suyo en amarillo
  $p.children('span').on('click', function (event) {
    event.preventDefault();

    $(this).css('background-color', 'yellow');
    $(this).css('font-weight', 'bold');
  });
});
