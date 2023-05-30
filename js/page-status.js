//=============================== АКТИВНОЕ СОСТОЯНИЕ =======================================
const getActiveStateTag = (data, tag) => {
  const tagForm = data.querySelectorAll(tag);
  tagForm.forEach((tagFormItem) => {
    tagFormItem.disabled = false;
  });
  return tagForm;
};
const getActiveState = (data) => {
  const arrayClassData = data.classList.value.split(' ');
  data.classList.remove(arrayClassData[1]);
  getActiveStateTag(data, 'input');
  getActiveStateTag(data, 'select');
  getActiveStateTag(data, 'textarea');
  return data;
};

//========================== НЕ АТИВНОЕ СОСТОЯНИЕ ===========================================
const getInactiveStateTag = (data, tag) => {
  const tagForm = data.querySelectorAll(tag);
  tagForm.forEach((tagFormItem) => {
    tagFormItem.disabled = true;
  });
  return tagForm;
};
const getInactiveState = (data) => {
  data.classList.add(`${data.classList.value}--disabled`);
  getInactiveStateTag(data, 'input');
  getInactiveStateTag(data, 'select');
  getInactiveStateTag(data, 'textarea');
  return data;
};

export {getInactiveState, getActiveState};
