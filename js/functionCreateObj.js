import {getRandomNumberFloat, getRandomInteger, randomElements, randomArray} from './functionCreateRandom.js';

//функция для создания объяккта с координатами места положения
function getLocation() {
  return {
    lat: getRandomNumberFloat(35.65000, 35.70000),
    lng: getRandomNumberFloat(139.70000, 139.80000)
  };
}

//Функция для создания объекта автора
function getAvatars(index) {
  if(index < 9){
    return `img/avatars/user0${index + 1}.png`;
  } else {
    return `img/avatars/user${index + 1}.png`;
  }
}

//функция для создания объкта с информации о помещение
function getOffers (building, time, feature, link, coordinates, index, describing){
  return {
    title: 'Сдам в аренду жилье',
    address: `${coordinates[index].lat}, ${coordinates[index].lng}`,
    price: getRandomInteger(15000, 40000),
    type: randomElements (building),
    rooms: getRandomInteger(1, 3),
    guests: getRandomInteger(1, 5),
    checkin: randomElements (time),
    checkout: randomElements (time),
    features: randomArray (feature),
    description: randomElements (describing),
    photos: randomArray (link)
  };
}

export {getLocation, getAvatars, getOffers};

