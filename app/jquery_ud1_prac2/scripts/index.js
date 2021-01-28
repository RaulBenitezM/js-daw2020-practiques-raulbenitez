$(() => {
  $('#selected-plays>li').addClass('horizontal');

  $('#selected-plays>li>*').addClass('sub-level');

  $('ul.clear-after > li').addClass('big-letter');

  $('a[href^="mailto"]').addClass('mailto');

  $('a[href$=".pdf"]').addClass('pdflink');

  $('a[href^="http"][href*="henry"').addClass('henrylink');

  $('table tr:nth-child(odd)').addClass('alt');

  $('table tr td:contains("Henry")').addClass('highlight');
});
