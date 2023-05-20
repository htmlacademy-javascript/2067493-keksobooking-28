const adForm = document.querySelector('.ad-form');
console.log(adForm);
const titleAdForm = adForm.querySelector('#title');
const priceAdForm = adForm.querySelector('#price');
console.log(titleAdForm);
const pristine = new Pristine (adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'div',
  errorTextClass: 'ad-form__element--error'
},);

const validateTitleAdForm = (value) => value.length >= 30 && value.length <= 100;

pristine.addValidator(
  titleAdForm,
  validateTitleAdForm,
  'От 30 до 100 символов'
);
const typeAdForm = adForm.querySelector('#type');

const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const validatePriceAdForm = (value) => value >= minPrice[typeAdForm.value] && value <= 100000;

const messageValidatePriceAdForm = (value) => {
  if(value < minPrice[typeAdForm.value]){
    return `Минимум ${minPrice[typeAdForm.value]}`;
  } else if (value > 100000) {
    return 'Максимум 100000';
  }
};

pristine.addValidator(
  priceAdForm,
  validatePriceAdForm,
  messageValidatePriceAdForm
);

typeAdForm.addEventListener('change', () => {
  priceAdForm.placeholder = `${minPrice[typeAdForm.value]}`;
  pristine.validate(priceAdForm);
});

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('Форма валидна');
  } else {
    console.log('Форма невалидна');
  }
});

