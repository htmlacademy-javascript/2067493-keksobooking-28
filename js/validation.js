import { markerUser } from './rendering-map.js';
import { CITY_CENTER } from './constants.js';
import { sliderElement } from './slider.js';
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
const quantityRoom = {
  '100': ['0'],
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3']
};
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
});

//------------------------------------Валидация заголовка----------------------------------
const validateTitleForm = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(
  titleForm,
  validateTitleForm,
  'От 30 до 100 символов'
);

//--------------------------------Валидация цены--------------------------------------------
priceForm.setAttribute('value', `${sliderElement.noUiSlider.get()}`);
const typeForm = adForm.querySelector('#type');
const validatePriceForm = (value) => value >= minPrice[typeForm.value] && value <= 100000;
const createMessageValidatePriceForm = (value) => {
  if (value < minPrice[typeForm.value]) {
    return `Минимум ${minPrice[typeForm.value]}`;
  } else if (value > 100000) {
    return 'Максимум 100000';
  }
};
pristine.addValidator(
  priceForm,
  validatePriceForm,
  createMessageValidatePriceForm
);

//------------------Проверка валидности цены при измение типа жилья----------------------
typeForm.addEventListener('change', () => {
  priceForm.placeholder = `${minPrice[typeForm.value]}`;
  pristine.validate(priceForm);
});

//----------------------------------Валидация адреса-------------------------------------
const addresForm = adForm.querySelector('#address');
addresForm.readOnly = true;
addresForm.setAttribute('value', `${CITY_CENTER.lat}, ${CITY_CENTER.lng}`);
markerUser.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addresForm.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
});

//----------------------Синхронизация времени заезда и выезда---------------------------
const timeinForm = adForm.querySelector('#timein');
const timeoutForm = adForm.querySelector('#timeout');
timeinForm.addEventListener('change', () => {
  timeoutForm.value = timeinForm.value;
});
timeoutForm.addEventListener('change', () => {
  timeinForm.value = timeoutForm.value;
});

//------------------------Валидация количества гостей----------------------------------
const roomForm = adForm.querySelector('#room_number');
const capacityForm = adForm.querySelector('#capacity');
const validateCapacityForm = () => quantityRoom[roomForm.value].includes(capacityForm.value);
pristine.addValidator(
  capacityForm,
  validateCapacityForm,
  'Не подходит количетсво гостей'
);
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

//-------------------- Возвращение значений По Умолчанию-----------------------------
const getDefaultForm = () => {
  markerUser.setLatLng(CITY_CENTER);
  sliderElement.noUiSlider.updateOptions({
    start: 30000});
  imageAvatarPreview.src = 'img/muffin-grey.svg';
  imageRoomPreview.src = 'img/muffin-red.svg';
};

//-----------------Проверка валидации формы при отпраки---------------
const isValid = () => pristine.validate();

export {isValid, getDefaultForm};
