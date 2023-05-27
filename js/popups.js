const succesTemplate = document.querySelector('#success').content
  .querySelector('.success');
const body = document.querySelector('body');
const onEscapeSuccess = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    console.log('Нажата клавиша esc');
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onEscapeSuccess);
  }
};

const onClickSuccess = () => {
  console.log('Произошел клик');
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscapeSuccess);
};

const showSuccessPopup = () => {
  const succesMessage = succesTemplate.cloneNode(true);
  body.append(succesMessage);
  console.log('вывести сообщение');
  document.addEventListener('keydown', onEscapeSuccess);
  document.querySelector('.success').addEventListener('click', onClickSuccess);
};

export { showSuccessPopup };
