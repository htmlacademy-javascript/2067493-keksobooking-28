// переменная характерезующая маскимальную длинну массива
const MAX_ELEMNTS = 10;

// типы зданий
const typeBuildings = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

//Время посещения и проверок
const times = ['12:00', '13:00', '14:00'];

//Особености в здании
const availability = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditione'];

//Фотографии к помещению
const linksPhptos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg'
];

//Описание помещение
const descriptions = [
  'Хорошее помещение, имеется все что необходимо',
  'Светло и красивое помещение',
  'Помещение после недавнего ремонта, и выглядит шикарно',
  'Все замечательно',
  'Очень уютное помещение'
];

//Функция для создания рандомных целых чисел
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

//Функция для создания чисел с плавающей точкой
function getRandomNumberFloat(a, b) {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(5);
}

//Функция для создания объекта автора
function getAvatars(index) {
  return `img/avatars/user${index + 1}.png`;
}

//функция для создания объяккта с координатами места положения
function getLocation() {
  return {
    lat: getRandomNumberFloat(35.65000, 35.70000),
    lng: getRandomNumberFloat(139.70000, 139.80000)
  };
}

//Функция для нахождения рандомного элемента в массиве
function randomElements (element) {
  return element[getRandomInteger(0, element.length - 1)];
}

//Функция для создания массива со случайной длинной
function randomArray (array) {
  return array.slice(getRandomInteger(0, array.length - 2), getRandomInteger(1, array.length - 1));
}

//функция для создания объкта с информации о помещение
function getOffers (building, time, feature, link, coordinates, index, describing){
  return {
    title: 'Сдам в аренду жилье',
    address: `${coordinates[index].lat} + ${coordinates[index].lng}`,
    price: getRandomInteger(15000, 50000),
    type: randomElements (building),
    rooms: getRandomInteger(1, 8),
    guests: getRandomInteger(1, 10),
    checkin: randomElements (time),
    checkout: randomElements (time),
    features: randomArray (feature),
    description: randomElements (describing),
    photos: randomArray (link)
  };
}

//создаем массив с координатами места положения
const locations = Array.from({length: MAX_ELEMNTS}, () => getLocation());

//Функция для создания массива со всеми объектами
function getAdvertisement (index) {
  const result = {
    avatars: getAvatars(index),
    location: locations[index],
    Offer: getOffers(typeBuildings, times, availability, linksPhptos, locations, index, descriptions)
  };
  return result;
}

//Создаем массив объявлений
const advertisement = Array.from({length: MAX_ELEMNTS}, (item, i) => getAdvertisement (i));

