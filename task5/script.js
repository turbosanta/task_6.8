let input = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField')

input.onkeyup = function() {
    duplicateField.textContent = input.value;
  };
  input.onkeyup();

document.querySelector('.clearBtn').addEventListener('click', function(event) {
    duplicateField.textContent = event.preventDefault();
    console.log(input.value);
  });