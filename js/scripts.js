console.log('Hello from js/scripts.js!');

let submit = document.getElementById('Submit');
let firstName = document.getElementById('inputFirstName');


submit.addEventListener('click', customName);

function customName() {  if(firstName.value !== '') {
    let name = firstName.value;
    let message = 'Thank you  ' + name + '!!! Enjoy Your Free Drink On Us!';
    let customMessage = document.querySelector('.customMessage');
    customMessage.textContent = message;

  }
}
