//=====================Сообщение об успещной отправки формы==========================================
const succesMessage = document.querySelector('#success').content
  .querySelector('.success');
const body = document.querySelector('body');

const onEscapeSuccess = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onEscapeSuccess);
  }
};

const onClickSuccess = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscapeSuccess);
};

const showSuccessPopup = () => {
  body.append(succesMessage);
  document.addEventListener('keydown', onEscapeSuccess);
  document.querySelector('.success').addEventListener('click', onClickSuccess);
};

//=========================Сообщение об ошибке отправки формы=======================================
const errorMessage = document.querySelector('#error').content
  .querySelector('.error');

const onEscapeError = (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onEscapeError);
  }
};
const onClickError = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onEscapeError);
};
const onClickButtonError = () => {
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onEscapeError);
};
const showErrorPopup = () => {
  body.append(errorMessage);
  document.querySelector('.error').addEventListener('click', onClickError);
  document.querySelector('.error__button').addEventListener('click', onClickButtonError);
  document.addEventListener('keydown', onEscapeError);
};

//============================Сообщение об ошибке загрузки данных==========================
const showMessageErrorDate = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.style.zIndex = 100;
  messageContainer.style.maxWidth = '1200px';
  messageContainer.style.minWidth = '1000px';
  messageContainer.style.margin = '0, auto';
  messageContainer.style.color = 'white';
  messageContainer.style.backgroundColor = 'red';
  messageContainer.style.display = 'flex';
  messageContainer.style.justifyContent = 'center';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.fontSize = '30px';

  messageContainer.textContent = message;
  document.querySelector('.notice').before(messageContainer);

  setTimeout (() => {
    messageContainer.remove();
  }, 10000);
};

export { showSuccessPopup, showErrorPopup, showMessageErrorDate };
