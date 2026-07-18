function showWeather(city,temperature) { 
  console.log(`сейчас в городе ${city} температура ${temperature} градусов`);
}

showWeather('Москва', 20);

const LIGHT_SPEED = '299 792 458';

function showSpeed(speed) {
  if (speed > light_speed) {
    console.log('Сверхсветовая скорость');
  } else if (speed === light_speed) {
    console.log('Световая скорость');
  } else {
    console.log('субсветовая скорость');
  }
}

showSpeed('299 792 457');

let variableNumber1 = 'milk';
let variableNumber2 = 'price';

function showPrice(currentBudget, variableNumber2) {
  if (currentBudget > variableNumber2) {
    console.log(` ${variableNumber1} товар приобретен. спасибо за покупку`);
  } else {
    console.log(` вам не хватает ${variableNumber2 - currentBudget} пополните баланс`);
  }
}

milkPrice(100, 150);