import './comments.js'
import './homework-7.js'
import './homework-8.js'
import './homework-9.js'
import './homework-10.js'
import './homework-11.js'
import './homework-12.js'
import Modal from "./modal.js";
import Form from "./form.js";

const registrationModal = new Modal("registration-modal");
const openRegistrationButton =
  document.querySelector(".open_registration");
openRegistrationButton.addEventListener("click", () => {
  registrationModal.open();
});

const registrationFormElement =
  document.getElementById("registration-form");
const registrationForm =
  new Form("registration-form");
registrationFormElement.addEventListener("submit", (event) => {
event.preventDefault();
if (!registrationForm.isValid()) {
  return;
}
  const user = registrationForm.getValues();
  console.log(user);
  registrationForm.reset();
});


const productCards = document.querySelectorAll('.card');
const changeColorAllCardsButton = document.querySelector('#change-color-all-cards');
const outputTitleConsole = document.querySelector('.title');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

outputTitleConsole.addEventListener('mouseover', () => {
  console.log(outputTitleConsole.textContent)
}); 

changeColorAllCardsButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash);
});

const firstProductCard = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

const openGoogleButton = document.querySelector('#open-google');
  openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm ('Вы уверены, что хотите открыть страницу Google?');
  if (answer === true) {
  window.open('https://google.com');
} else {
  return;
}
}

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => {
  outputConsoleLog('ДЗ №6');
});

function outputConsoleLog(message) {
  console.log(message);
}

const toggleColorButton = document.querySelector('#toggle-color-button');
  toggleColorButton.addEventListener('click', () => { 
  toggleColorButton.classList.toggle('color-toggle-button-active');
});