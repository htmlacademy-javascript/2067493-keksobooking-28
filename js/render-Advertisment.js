//Находим контент шаблона #card
const pattern = document.querySelector('#card').content
  .querySelector('.popup');
//Находим контейнер куда будут помещаться все элементы
const container = document.querySelector('#map-canvas');

//Функция для проверки типа здания
const checkType = (obj) => {
  switch (obj) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};

//Функция добавления эелементов на страницу
const renderAdvertisment = ({ offer, author}) => {
  //Клонируем шаблон
  const advertismentTemplate = pattern.cloneNode(true);

  //Находим список особеностей зданий
  const featuresContainer = advertismentTemplate.querySelector('.popup__features');
  //Находим все элементы списка особеностей здания
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');

  //Находим в шаблоне блок куда вставляются фотографии
  const templatePhotos = advertismentTemplate.querySelector('.popup__photos');
  //Находим элемент блока фотография и удаляем его
  const templatePhotoElement = templatePhotos.querySelector('.popup__photo');
  templatePhotoElement.remove();

  //Вставляем текстовый контент из массива в шаблон
  advertismentTemplate.querySelector('.popup__title').textContent = offer.title;
  advertismentTemplate.querySelector('.popup__text--address').textContent = offer.address;
  advertismentTemplate.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advertismentTemplate.querySelector('.popup__type').textContent = checkType(offer.type);
  advertismentTemplate.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advertismentTemplate.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests}`;
  advertismentTemplate.querySelector('.popup__description').textContent = offer.description;

  //Проверяем особенности здания и удалем из списка те которых нету в массиве объявления
  if(Object.hasOwn(offer, 'features')){
    featuresList.forEach((featureItem) => {
      const idNecessary = offer.features.some((feature) => featureItem.classList.contains(`popup__feature--${feature}`));
      if (!idNecessary) {
        featureItem.remove();
      }
    });
  } else {
    featuresList.forEach((featureItem) => {
      featureItem.remove();
    });
  }

  //Добавляем фотографии в шаблон в случае если они есть
  if(Object.hasOwn(offer, 'photos')){
    offer.photos.forEach((photo) => {
      const cratePhoto = templatePhotoElement.cloneNode(true);
      cratePhoto.src = photo;
      templatePhotos.append(cratePhoto);
    });
  }

  //Добавлем фотографию аватарки автора
  advertismentTemplate.querySelector('.popup__avatar').src = author.avatar;
  return advertismentTemplate;
};

//Экспортиуем необходимые данные
export { renderAdvertisment, container };

