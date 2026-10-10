class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    if (new.target === Drink) {
      throw new Error("Нельзя создать экземпляр класса Drink");
    }

    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  getInfo() {
    console.log(`${this.name}, размер: ${this.size}, цена: ${this.price} ₽`);
  }

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }

  #prepare() {
    console.log(`${this.name} готовится...`);
  }

  serve() {
    this.#prepare();
    console.log(`${this.name} подан`);
  }
}

class Coffee extends Drink {
  constructor(name, size, price, temperature, beans, milk) {
    super(name, size, price, temperature);

    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    console.log(
      `${this.name}, ${this.size}, ${this.price} ₽, ` +
        `зерна: ${this.beans}, молоко: ${this.milk}`
    );
  }
}

class Tea extends Drink {
  constructor(name, size, price, temperature, teaType) {
    super(name, size, price, temperature);

    this.teaType = teaType;
  }

  getInfo() {
    console.log(
      `${this.name}, ${this.size}, ${this.price} ₽, ` +
        `вид чая: ${this.teaType}`
    );
  }
}

class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);

    this.flavor = flavor;
  }

  getInfo() {
    console.log(
      `${this.name}, ${this.size}, ${this.price} ₽, ` +
        `вкус: ${this.flavor}`
    );
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log(`Кафе: ${this.name}, местоположение: ${this.location}`);
  }

  orderDrink(drink) {
    console.log(`Заказ принят: ${drink.name}`);
    drink.serve();
    console.log(`Заказ выполнен: ${drink.name}`);
  }
}

const coffee = new Coffee(
  "Капучино",
  "300 мл",
  350,
  70,
  "Арабика",
  "Овсяное"
);

const tea = new Tea(
  "Чёрный чай",
  "400 мл",
  250,
  80,
  "Ассам"
);

const lemonade = new Lemonade(
  "Лимонад",
  "500 мл",
  300,
  5,
  "Лимон"
);

const cafe = new Cafe(
  "Coffee House",
  "Актобе"
);

cafe.getInfo();
coffee.getInfo();
tea.getInfo();
lemonade.getInfo();

console.log(`Температура кофе: ${coffee.getTemperature()}°C`);

coffee.setTemperature(65);

console.log(`Новая температура кофе: ${coffee.getTemperature()}°C`);

cafe.orderDrink(coffee);
cafe.orderDrink(tea);
cafe.orderDrink(lemonade);
