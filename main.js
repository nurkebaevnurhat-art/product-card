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