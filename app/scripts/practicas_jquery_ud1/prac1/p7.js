$(document).ready(function () {
  let $button = $('#boton1');

  $button.click(() => {
    let $select = $('select');

    for ($option of $select.children()) $option.remove();

    $select.append('<option selected>Blanco</option>');
  });
});
