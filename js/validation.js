import { markerUser } from './rendering-map.js';
const adForm = document.querySelector('.ad-form');
const titleForm = adForm.querySelector('#title');
const priceForm = adForm.querySelector('#price');
const pristine = new Pristine (adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__element--error'
},);

//Валидация заголовка
const validateTitleForm = (value) => value.length >= 30 && value.length <= 100;
pristine.addValidator(
  titleForm,
  validateTitleForm,
  'От 30 до 100 символов'
);

//Валидация цены
const typeForm = adForm.querySelector('#type');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};
//Проверка валидности цены
const validatePriceForm = (value) => value >= minPrice[typeForm.value] && value <= 100000;
//Сообщение если цена не валидна
const messageValidatePriceForm = (value) => {
  if(value < minPrice[typeForm.value]){
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
//Измение типа жилья
typeForm.addEventListener('change', () => {
  priceForm.placeholder = `${minPrice[typeForm.value]}`;
  pristine.validate(priceForm);
});

//Валидация адреса
const addresForm = adForm.querySelector('#address');
addresForm.readOnly = true;
addresForm.value = 'lat 35.6895, lng 139.692';
//Получение координаты адреса по перемещению маркера
markerUser.on('moveend', (evt) => {
  const coordinates = evt.target.getLatLng();
  addresForm.value = `lat ${coordinates.lat.toFixed(5)}, lng ${coordinates.lng.toFixed(5)}`;
});

//Синхронизация времени заезда и выезда
const timeinForm = adForm.querySelector('#timein');
const timeoutForm = adForm.querySelector('#timeout');
//Синхронизация времение выезда при измение времени заезда
timeinForm.addEventListener('change', () => timeoutForm.value = timeinForm.value);
//Синхронизация времени заезда при изменение времени выезда
timeoutForm.addEventListener('change', () => timeinForm.value = timeoutForm.value);

//Синхронизация количества комнат м количеством мест
const roomForm = adForm.querySelector('#room_number');
const capacityForm = adForm.querySelector('#capacity');
const capacityFormElement = capacityForm.querySelectorAll('option');
capacityForm.value = 1;
roomForm.addEventListener('change', () => {
  capacityFormElement.forEach((element) => {
    if(roomForm.value == 100 && element.value == 0) {
      return element.disabled = false;
    } else if(roomForm.value + 0 < element.value || element.value == 0){
      return element.disabled = true;
    }
    return element.disabled = false;
  });
});

capacityForm.value = 1;

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

