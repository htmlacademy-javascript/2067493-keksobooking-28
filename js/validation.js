import { markerUser } from './rendering-map.js';
const adForm = document.querySelector('.ad-form');
const titleForm = adForm.querySelector('#title');
const priceForm = adForm.querySelector('#price');
const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__element--error'
},);

//------------Валидация заголовка------------------
const validateTitleForm = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(
  titleForm,
  validateTitleForm,
  'От 30 до 100 символов'
);

//------------Валидация цены---------------------
const typeForm = adForm.querySelector('#type');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
//Функция проверки валидности цены
const validatePriceForm = (value) => value >= minPrice[typeForm.value] && value <= 100000;
//Сообщение если цена не валидна
const messageValidatePriceForm = (value) => {
  if (value < minPrice[typeForm.value]) {
    return `Минимум ${minPrice[typeForm.value]}`;
  } else if (value > 100000) {
    return 'Максимум 100000';
  }
};
//Проверка валидности цены
pristine.addValidator(
  priceForm,
  validatePriceForm,
  messageValidatePriceForm
);
//Проверка валидности цены при измение типа жилья
typeForm.addEventListener('change', () => {
  priceForm.placeholder = `${minPrice[typeForm.value]}`;
  pristine.validate(priceForm);
});

//---------------Валидация адреса---------------------
const addresForm = adForm.querySelector('#address');
addresForm.readOnly = true;
addresForm.value = '35.6895, 139.692';
//Получение координаты адреса по перемещению маркера
markerUser.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addresForm.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

//-------Синхронизация времени заезда и выезда----------
const timeinForm = adForm.querySelector('#timein');
const timeoutForm = adForm.querySelector('#timeout');
//Синхронизация времение выезда при измение времени заезда
timeinForm.addEventListener('change', () => timeoutForm.value = timeinForm.value);
//Синхронизация времени заезда при изменение времени выезда
timeoutForm.addEventListener('change', () => timeinForm.value = timeoutForm.value);

//------------Валидация количества гостей--------------
const roomForm = adForm.querySelector('#room_number');
const capacityForm = adForm.querySelector('#capacity');
const quantityRoom = {
  '100': ['0'],
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3']
};
//Функция проверки валидности количества гостей
const capapasityOption = () => quantityRoom[roomForm.value].includes(capacityForm.value);
//Проверка валидности количества гостей
pristine.addValidator(
  capacityForm,
  capapasityOption,
  'Не подходит количетсво гостей'
);
//Проверка валидности количества гостей при измение количетсва комнат
roomForm.addEventListener('change', () => pristine.validate(capacityForm));

//------------------Фотография аватарки-------------------------------
const avatarForm = adForm.querySelector('#avatar');
const imageAvatarPreview = adForm.querySelector('.ad-form-header__preview img');
avatarForm.addEventListener('change', () => {
  const image = avatarForm.files[0];
  imageAvatarPreview.src = URL.createObjectURL(image);
});

//------------------Фотография помещения-------------------------------
const roomPhotoForm = adForm.querySelector('#images');
const roomPreview = adForm.querySelector('.ad-form__photo');
const imageRoomPreview = document.createElement('img');
imageRoomPreview.width = '70';
imageRoomPreview.height = '70';
imageRoomPreview.src = 'img/muffin-red.svg';
roomPreview.append(imageRoomPreview);
roomPhotoForm.addEventListener('change', () => {
  const imageRoom = roomPhotoForm.files[0];
  imageRoomPreview.src = URL.createObjectURL(imageRoom);
});

//Проверка валидации формы при отпраки
adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Форма валидна');
  } else {
    console.log('Форма невалидна');
  }
});

