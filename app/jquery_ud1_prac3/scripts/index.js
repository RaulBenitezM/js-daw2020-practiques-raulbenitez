$(() => {
  //Código de la práctica 2
  $('#selected-plays>li').addClass('horizontal');

  $('#selected-plays>li>*').addClass('sub-level');

  $('ul.clear-after > li').addClass('big-letter');

  $('a[href^="mailto"]').addClass('mailto');

  $('a[href$=".pdf"]').addClass('pdflink');

  $('a[href^="http"][href*="henry"').addClass('henrylink');

  $('table tr:nth-child(odd)').addClass('alt');

  $('table tr td:contains("Henry")').addClass('highlight');

  //Código nuevo para la práctica 3
  //Punto 1
  $('table tr td:contains("Henry")').next().addClass('highlight');

  //Punto 2
  $('table:nth-of-type(1) tr td:contains("et")')
    .nextAll()
    .addClass('highlight');
});
