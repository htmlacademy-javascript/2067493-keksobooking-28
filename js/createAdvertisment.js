import{getLocation, getAvatars, getOffers} from './functionCreateObj.js';

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

//создаем массив с координатами места положения
const locations = Array.from({length: MAX_ELEMNTS}, () => getLocation());

//Функция для создания массива со всеми объектами
function getAdvertisement (index) {
  return {
    avatars: getAvatars(index),
    location: locations[index],
    Offer: getOffers(typeBuildings, times, availability, linksPhptos, locations, index, descriptions)
  };
}

//Создаем массив объявлений
const advertisement = Array.from({length: MAX_ELEMNTS}, (item, i) => getAdvertisement (i));

export {advertisement};
