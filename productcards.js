export const productCard = [
  {
    title: "Увлажняющий мусс",
    category: "для нормальной кожи",
    description: "Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.",
    compound__list: [
      "активные натуральные комплексы",
      "витамины С, А, РР, В И Е",
      "солнцезащитные компоненты"
    ],
    price: 2750
  },
  {
    title: "Увлажняющая маска",
    category: "для нормальной кожи",
    description: "Способствует удерживанию влаги в верхних слоях кожи.",
    compound__list    : [
      "воски",
      "минералы",
      "масла"
    ],
    price: 3500
  },
  {
    title: "Гель для умывания",
    category: "для нормальной кожи",
    description: "Интенсивно очищает, не повреждает защитный барьер кожи..",
    compound__list: [
      "минералы",
      "витамины С, А, РР, В И Е",
      "солнцезащитные компоненты"
    ],
    price: 1650
  },
  {

    title: "Подарочный набор №1",
    category: "для нормальной кожи",
    description: "Набор, состоящий из увлажняющего крема и маски.",
    compound__list: [
      "воски",
      "минералы",
      "масла"
    ],
    price: 4750
  },
  {
    title: "Подарочный набор №2",
    category: "для нормальной кожи",
    description: "Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания..",
    compound__list: [
      "воски",
      "минералы",
      "масла"
    ],
    price: 7520
  }
];

const productCardTemplate = document.getElementById("product-card-template");
const productCardsContainer = document.getElementById("product-cards");
productCard.forEach((product) => {
  const productClone = productCardTemplate.content.cloneNode(true);
  productClone.querySelector(".card__name").textContent = product.title;
  productClone.querySelector(".card__category").textContent = product.category;
  productClone.querySelector(".card__description").textContent = product.description;
  productClone.querySelector(".compound__list").textContent = product.compound__list.join(", ");
  productClone.querySelector(".card__price").textContent = `${product.price}  &#8381`;
  productCardsContainer.appendChild(productClone);
  console.log(productCardsContainer)
});

