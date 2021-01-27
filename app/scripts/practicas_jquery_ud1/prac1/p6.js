$(document).ready(function () {
  let $button = $('button#button1');

  $button.click(() => {
    let num = $('div.div').children().length;

    $('div')
      .last()
      .append('<p>Hay ' + num + ' elementos en el segundo div</p>');
  });
});
