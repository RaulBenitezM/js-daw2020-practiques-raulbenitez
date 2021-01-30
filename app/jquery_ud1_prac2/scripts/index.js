$(() => {
  //Punto 1
  $('#selected-plays>li').addClass('horizontal');

  //Punto 2
  $('#selected-plays>li>*').addClass('sub-level');

  //Punto 3
  $('ul.clear-after > li').addClass('big-letter');

  //Punto 4
  $('a[href^="mailto"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"').addClass('henrylink');

  //Punto 5
  $('table tr:nth-child(odd)').addClass('alt');

  //Punto 6
  $('table tr td:contains("Henry")').addClass('highlight');
});
