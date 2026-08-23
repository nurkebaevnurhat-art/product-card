import { productCard } from './productcards.js';

// №3 создание и реализация шаблона для продуктовых карточек с 2 функциями
function showProducts() {
  const input = prompt("Введите количество товаров для отображения (от 1 до 5):");
  const count = Number(input);

  if (input === null) {
    console.log("Ввод отменен.");
  } else if (!isNaN(count) && count >= 1 && count <= 5 && Number.isInteger(count)) {
    const selectedProducts = productCard.slice(0, count);

    console.log(`Отображаем товары (${count} шт.):`, selectedProducts);
  } else {
    alert("Ошибка! Пожалуйста, введите целое число от 1 до 5.");
  }
}
showProducts();

function renderProductCards() {
  const productCardsContainer = document.getElementById("product-cards");
}
renderProductCards(productCard);

// №4 используя метод reduce, создайте объект, в котором ключом будет название продукта, а значением - описание
const productDescriptions = productCard.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);

console.log(productDescriptions);


const productCardTemplate = document.getElementById("product-card-template");
const productCardsContainer = document.getElementById("product-cards");

productCard.forEach((product) => {
  const productClone = productCardTemplate.content.cloneNode(true);
  productClone.querySelector(".card__name").textContent = product.title;
  productClone.querySelector(".card__category").textContent = product.category;
  productClone.querySelector(".card__description").textContent = product.description;
  productClone.querySelector(".compound__list").textContent = product.compound__list.join(", ");
  productClone.querySelector(".card__value").textContent = `${product.price} ₽`;
  productClone.querySelector("img").src = product.img;
  productCardsContainer.appendChild(productClone);
});