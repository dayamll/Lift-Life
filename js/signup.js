$(document).ready(function() {
  var $phoneNumber = $('.input-phone');
  var $btn = $('.next, .resend');
  var $code = $('.img-flags');

  // codigo de pais 
  $code.on('click', function(event) {
    $('#code-countries img').attr('src', '../assets/images/ban-' + $(event.target).closest('a').attr('class'));
    $('#number').val($(event.target).closest('a').attr('data-code'));
  });

  // funcion que habilita el boton NEXT,
  // si el valor ingresado cumple con la condicion.
  $phoneNumber.keyup(function() {
    var $value = $(this).val();

    if ($value.length === 10) {
      $btn.attr('disabled', false);
    } else {
      $btn.attr('disabled', 'disabled');
    }
  });

  // funcion que envia un codigo random y 
  // direcciona a la siguiente pagina.
  $btn.on('click', function(event) {
    event.preventDefault();
    var $number = Math.floor(Math.random() * 1001);
    var $code = 'Lab -' + $number;
    alert('Tu código es : ' + $code);
    localStorage.codeLab = $number;
    window.location.href = 'code.html';
  });
});