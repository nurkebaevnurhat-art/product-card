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
  const products = [
    { name: 'Яблоко', description: 'Спелое и сочное' },
    { name: 'Хлеб', description: 'Свежевыпеченный ржаной' },
    { name: 'Молоко', description: 'Пастеризованное 3.2%' }
  ];

  const result = products.reduce((acc, item) => {
    acc[item.name] = item.description;
    return acc;
  }, {});

  console.log(result);
