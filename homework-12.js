
class Product {
  constructor(title, price) {
  this.title = title;
  this.price = price;
}

showInfo() {
  console.log(`${this.title} - ${this.price} rub`);
  }
}

class BeautyProduct extends Product {
constructor(title, price, skinType) {
  super(title, price);
  this.skinType = skinType;
  }
}

class FaceMask extends BeautyProduct {
constructor(title, price, skinType, volume) {
  super(title, price, skinType);
  this.volume = volume;
}

showInfo() {
  console.log(
  `${this.title} - ${this.price} rub, ${this.skinType}, ${this.volume}`
  );
  }
}

class CleansingGel extends BeautyProduct {
  constructor(title, price, skinType, cleansingType) {
  super(title, price, skinType);
  this.cleansingType = cleansingType;
}

showInfo() {
console.log(
  `${this.title} - ${this.price} rub, ${this.skinType}, ${this.cleansingType}`
  );
  }
}

class Mousse extends BeautyProduct {
  constructor(title, price, skinType, moisturizingLevel) {
  super(title, price, skinType);
  this.moisturizingLevel = moisturizingLevel;
}

showInfo() {
console.log(
    `${this.title} - ${this.price} rub, ${this.skinType}, ${this.moisturizingLevel}`
    );
  }
}

class GiftSet extends BeautyProduct {
constructor(title, price, skinType, productsCount) {
  super(title, price, skinType);
  this.productsCount = productsCount;
}

showInfo() {
console.log(
  `${this.title} - ${this.price} rub, ${this.skinType}, товаров в наборе: ${this.productsCount}`
  );
  }
}

const mask = new FaceMask(
  "Увлажняющая маска",
  3500,
  "нормальная кожа",
  "100 мл"
);

const gel = new CleansingGel(
  "Гель для умывания",
  1650,
  "нормальная кожа",
  "Мягкое очищение"
);

const mousse = new Mousse(
  "Увлажняющий мусс",
  2750,
  "нормальная кожа",
  "Глубокое увлажнение"
);

const giftSet = new GiftSet(
  "Подарочный набор",
  5500,
  "для всех типов кожи",
  4
);

const products = [mask, gel, mousse, giftSet];

products.forEach(product => {
  product.showInfo();
});
