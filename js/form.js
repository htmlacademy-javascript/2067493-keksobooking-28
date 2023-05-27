import { adForm } from './constains.js';
import { isValid } from './validation.js';
import { postData } from './api.js';
import { showSuccessPopup } from './popups.js';
import { setFilters } from './filters.js';
const formFilters = document.querySelector('.map__filters');
const resetButton = adForm.querySelector('.ad-form__reset');
const resetFilter = () => {
  formFilters.reset();
};

resetButton.addEventListener('click', () => {
  resetFilter();
});

const submitForm = adForm.querySelector('.ad-form__submit');
adForm.addEventListener('submit', (evt) => {
  console.log('Кнопка нажата');
  evt.preventDefault();
  console.log(isValid);
  if (isValid) {
    console.log('Форма валидна');
    submitForm.disabled = true;
    postData(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          console.log('успешно');
          // Очистить форму
          // Очистить фильтры
          // Показать сообщение об успешной отправке формы
          showSuccessPopup();
        } else {
          console.log('Ошибка');
        }

      })
      .catch()
      .finally(() => {
        //Разблокировать кнопку
        submitForm.disabled = false;
      });
  }
});
const setForm = () => {
  console.log('setForm');
};
export { setForm };
