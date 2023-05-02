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

export {getInactiveState};

