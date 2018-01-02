$(document).ready(function() {
  var codeLab = $('.code');
  var $next = $('.next');

  var $resend = $('.resend');

  $resend.on('click', function(event) {
    event.preventDefault();
    var $number = Math.floor(Math.random() * 1001);
    var $code = 'LAB-' + number;
    alert('Tu código es : ' + code); 
    localStorage.codeLab = number;
  });

  $next.on('click', function() {
    window.location.href = 'register.html';
  });
});