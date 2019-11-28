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

// second attempt
//let Submit = document.getElementById('Submit');
//let firstName = document.querySelector('.inputFirstName');
//let story = document.querySelector('.story');

//function randomValueFromArray(array){
//  let random = Math.floor(Math.random()*array.length);
//  return array[random];
//}

//let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
//let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
//let insertY = ['the soup kitchen','Disneyland','the White House'];
//let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

//Submit.addEventListener('click', firstName);

//function result() {
  //let newStory = storyText;

  //let xItem = randomValueFromArray(insertX);
  //let yItem = randomValueFromArray(insertY);
  //let zItem = randomValueFromArray(insertZ);

  //newStory = newStory.replace(':insertx:',xItem);
  //newStory = newStory.replace(':insertx:',xItem);
  //newStory = newStory.replace(':inserty:',yItem);
  //newStory = newStory.replace(':insertz:',zItem);
  //function customName() {  if(firstName.value !== '') {
      //let name = firstName.value;
      //let message = 'Thank you  ' + name + '!!! Enjoy Your Free Drink On Us!';
      //let customMessage = document.querySelector('.customMessage');
      //customMessage.textContent = message;

    //}
  //}


  //if(customName.value !== '') {
    //let name = firstName.value;
    //let message = 'Thank you  ' + name + '!!! Enjoy Your Free Drink On Us!';
    //let customMessage = document.querySelector('.customMessage');
    //customMessage.textContent = message;

  //}

  //if(document.getElementById("uk").checked) {
  //  let weight = Math.round(300*0.0714286) + ' stone';
  //  let temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
  //  newStory = newStory.replace('94 fahrenheit',temperature);
    //newStory = newStory.replace('300 pounds',weight);
  //}

  //story.textContent = newStory;
  //story.style.visibility = 'visible';
//}
