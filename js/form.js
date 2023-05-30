import { adForm, filtersForm} from './constains.js';
import { isValid, getDefaultForm } from './validation.js';
import { postData } from './api.js';
import { showSuccessPopup, showErrorPopup } from './popups.js';

const submitForm = adForm.querySelector('.ad-form__submit');

//-------------------Сброс при нажатие "очистить"--------------------
const resetFilter = () => {
  filtersForm.reset();
};
const setUserFormReset = () => {
  adForm.addEventListener('reset', () => {
    getDefaultForm();
    resetFilter();
  });
};

//---------------------Отправка формы на сервер------------------------
const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (isValid()) {
      submitForm.disabled = true;
      postData(new FormData(evt.target))
        .then((response) => {
          if (response.ok) {
            adForm.reset();
            getDefaultForm();
            resetFilter();
            showSuccessPopup();
          } else {
            showErrorPopup();
          }
        })
        .catch(() => showErrorPopup())
        .finally(() => {
          submitForm.disabled = false;
        });
    }
  });
};

export { setUserFormSubmit, setUserFormReset };
