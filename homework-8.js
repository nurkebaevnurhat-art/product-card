// № 3 создание объекта с личной информацией
const user = {
  name: "Nurhat",
  surname: "Nurkebaeyev",
  family: "married",
  age: 36,
  country: "Kazakhstan",
  city: "Almaty",
  email: "nurkebayevnurat@gmail.com"
}

// № 4 создание объекта с информацией об автомобиле
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "white",
  engine: "2.5L",
  transmission: "automatic",
}
  car.owner = user
  console.log(user)


  // № 5 функция для определения максимальной скорости
function ensureMaxSpeed(car, defaultValue = 200) {
  if (!car.hasOwnProperty("maxSpeed")) {
    car["maxSpeed"] = defaultValue;
  }
  return car;
}
console.log(ensureMaxSpeed(car));

// № 6 функция 
function getObjectProperty(obj, propertyName) {
  console.log(obj[propertyName]);
}
getObjectProperty(user, 'name');

// № 7 массив со списком продуктов
const products = ["apple", "banana", "orange", "grape", "kiwi"];
console.log(products);

// № 8 массив с книгами
const books = [
{
  title: "1984",
  author: "Джордж Оруэлл",
  year: 1949,
  coverColor: "серый",
  genre: "антиутопия"
  },
{
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967,
  coverColor: "синий",
  genre: "роман"
},
  {
  title: "Граф Монте-Кристо",
  author: "Александр Дюма",
  year: 1844,
  coverColor: "коричневый",
  genre: "приключения"
},
  {
  title: "Автостопом по галактике",
  author: "Дуглас Адамс",
  year: 1979,
  coverColor: "зелёный",
  genre: "научная фантастика"
}
];

books.push({
  title: "Дюна",
  author: "Фрэнк Герберт",
  year: 1965,
  coverColor: "оранжевый",
  genre: "научная фантастика"
});

console.log(books);

// № 9 объединение массивов
const starWarsBooks = [
{
  title: "Звёздные войны. Эпизод IV: Новая надежда",
  author: "Алан Дин Фостер (под псевдонимом Джордж Лукас)",
  year: 1976,
  isRare: true,
},
{
  title: "Траун",
  author: "Тимоти Заан",
  year: 2017,
  isRare: false,
},
{
  title: "Наследник Империи",
  author: "Тимоти Заан",
  year: 1991,
  isRare: true,
},
{
  title: "Дарт Плэгас",
  author: "Джеймс Лусено",
  year: 2012,
  isRare: false,
},
{
  title: "Свет джедаев",
  author: "Чарльз Соул",
  year: 2021,
  isRare: false,
},
{
  title: "Утерянные звёзды",
  author: "Клаудия Грей",
  year: 2015,
  isRare: false,
}
];
  const allBooks = [...books, ...starWarsBooks];

// № 10 добавление свойства old в объект книги
const booksWithOldProperty = allBooks.map(book => {
if (book.year < 2000) {
  book.old = true;
}
else {
  book.old = false;
}
return book;
});
  console.log(booksWithOldProperty);