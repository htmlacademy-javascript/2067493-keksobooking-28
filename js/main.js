// Первое задание (14.5) Больше деталей.

/*Создать массив похожих объявлений.
  Массив состоит из объектов:
  1) Объект aurhor (Автор объявление) данный массив состоит из одной строки в которой указываеться адрес изображения
  2) Объект offer (Информация об объявление) состоит из следующих полей:
        2.1) title (Закоголовок);
        2.2) address(Адресс) - географические координаты (lat - широта от 35.65000 до 35.70000) (lng - долгота от 139.70000 до 139.80000);
        2.3) price (Стоимость) - Случайное целое положительное число;
        2.4) type (Тип сооружения) - одно из пяти значений (palace (дворец), flat(квартира), house(дом), bungalow(бунгало), hotel(отель));
        2.5) checkin  - одно из из трех фиксированных значение (12:00, 13:00, 14:00);
        2.6) checkout  - одно из из трех фиксированных значение (12:00, 13:00, 14:00)
        2.7) features (Особенности) - масиив строк случайной длинны (значения: wifi, dishwasher, parking, washer, elevator, conditione);
        2.8) photos (Фотографии) - массив строк случайной длины (значения: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg
                                                                          https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg
                                                                          https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg)
  3) location (местоположение) - в виде географических координат (lat - широта от 35.65000 до 35.70000) (lng - долгота от 139.70000 до 139.80000)
*/

const MAX_ELEMNTS = 10; // переменная характерезующая маскимальную длинну массива
const typeBuildings = ['palace', 'flat', 'house', 'bungalow', 'hotel'];// типы зданий
const times = ['12:00', '13:00', '14:00'];//Время посещения и проверок
const availability = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditione'];
const linksPhptos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg'
];//Ссылки на фотографии

function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function getAvatars(index) {
  return `img/avatars/user${index + 1}.png`;
}

function getOffers (building, time, feature, link,){
  return {
    title: 'Сдам в аренду жилье',
    address: 12,
    price: getRandomInteger(15000, 50000),
    type: building[getRandomInteger(0, building.length - 1)],
    rooms: getRandomInteger(1, 8),
    guests: getRandomInteger(1, 10),
    checkin: time[getRandomInteger(0, time.length - 1)],
    checkout: time[getRandomInteger(0, time.length - 1)],
    features: feature.slice(getRandomInteger(0, feature.length - 2), getRandomInteger(1, feature.length - 1)),
    description:12,
    photos: link.slice(getRandomInteger(0, link.length - 2), getRandomInteger(1, link.length - 1))
  }
}
const l = getOffers(typeBuildings, times, availability, linksPhptos);
console.log(l)
