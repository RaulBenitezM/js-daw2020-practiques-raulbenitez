$(document).ready(function () {
  $('ul').find('li').first().css('background-color', 'red');
  $('ul').find('li').last().css('background-color', 'blue');
  $('ul').find('li#3').css('background-color', 'yellow');
});
