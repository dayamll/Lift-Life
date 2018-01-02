$(document).ready(function() {
  var $firstName = $('.first-name');
  var $lastName = $('.last-name');
  var $email = $('.email');
  var $checked = $('input[type="checkbox"]');
  var next = $('.btn-next');

  var validateEmail = false;
  var validateChecked = false;
  var validateFirstName = false;
  var validateLastName = false;

  // llamamos a los valores guardados en el localStorage
  console.log(localStorage.email);
  console.log(localStorage.checked);
  console.log(localStorage.firstName);
  console.log(localStorage.lastName);
  console.log(localStorage.next);


  $email.on('input', function() {
    if ($(this).val() === localStorage.email) {
      // alert('pasa');
      validateEmail = true;
    }
  });

  $firstName.on('input', function() {
    if ($(this).val() === localStorage.firstName) {
      // alert('esto tambien pasa');
      validateFirstName = true;
    }
  });

  $lastName.on('input', function() {
    if ($(this).val() === localStorage.lastName) {
      // alert('esto tambien pasa');
      validateLastName = true;
    }
  });

  $buttonSubmit.on('click', function(event) {
    event.preventDefault();
    if (validateEmail && validateFirstName && validateLastName) {
      alert('Welcome!!');
    } else {
      alert('Oh no, you need register');
    }

    next.on('click', function() {
      window.location.href = 'menu.html';
    });
  });
});