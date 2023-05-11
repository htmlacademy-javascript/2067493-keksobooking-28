const getActiveStateTag = (data, tag) => {
  const tagForm = data.querySelectorAll(tag);
  tagForm.forEach((tagFormItem) => {
    tagFormItem.disabled = false;
  });
  return tagForm;
};

const getActiveState = (data) => {
  data.classList.remove(`${data.classList.value}--disabled`);
  getActiveStateTag(data, 'input');
  getActiveStateTag(data, 'select');
  getActiveStateTag(data, 'textarea');
  return data;
};


export {getActiveState};
