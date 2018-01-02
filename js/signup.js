$(document).ready(function() {
  var $phoneNumber = $('.input-phone');
  var $btn = $('.next');

  // funcion que habilita el boton NEXT,
  // si el vlor ingresado cumple con la condicion.
  $phoneNumber.keyup(function() {
    var $value = $(this).val();

    if ($value.length === 10) {
      $btn.attr('disabled', false);
    } else {
      $btn.attr('disabled', 'disabled');
    }
  });
  
  // funcion que envia un codigo random y 
  // direcciona a la sguiente pagina.
  $btn.on('click', function(event) {
    event.preventDefault();
    var $number = Math.floor(Math.random() * 1001);
    var $code = 'Lab -' + $number;
    alert('Tu código es : ' + $code);
    localStorage.codeLab = $number;
    window.location.href = 'code.html';
  });
});