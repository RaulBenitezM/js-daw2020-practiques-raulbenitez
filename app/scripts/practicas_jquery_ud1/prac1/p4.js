$(document).ready(function () {
  $('ul').last().find('li').first().css('background-color', 'red');
  $('ul').first().find('li').last().css('background-color', 'blue');
  $('ul').eq('1').find('li').eq('2').css('background-color', 'yellow');
});
