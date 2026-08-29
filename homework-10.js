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

const productCardTemplate = document.getElementById("product-card-template");
const productCardsContainer = document.getElementById("product-cards");


function renderProductCards(products) {
  const productCardsContainer = document.getElementById("product-cards");
  products.forEach((product) => {
    const productClone = productCardTemplate.content.cloneNode(true);
    productClone.querySelector(".card__title").textContent = product.title;
    productClone.querySelector(".card__category").textContent = product.category;
    productClone.querySelector(".card__description").textContent = product.description;
    productClone.querySelector(".card__value").innerHTML =`${product.price} &#8381;`;
    productClone.querySelector(".card__image").src = `img/${product.img}.png`;
    product.compound__list.forEach((compoundItem) => {
      const li = document.createElement("li");
      li.classList.add(".compound__list");
      li.textContent = compoundItem;
      productClone.querySelector(".compound__list").appendChild(li)

   });
   productCardsContainer.appendChild(productClone);
  });
}

renderProductCards(productCard);

// №4 используя метод reduce, создайте объект, в котором ключом будет название продукта, а значением - описание
const productDescriptions = productCard.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);

console.log(productDescriptions);