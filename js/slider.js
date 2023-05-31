const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const sliderElement = document.querySelector('.ad-form__slider');
const valueElement = document.querySelector('#price');
const typeForm = document.querySelector('#type');
noUiSlider.create(sliderElement, {
  range: {
    min: 1000,
    max: 100000
  },
  start: 30000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

valueElement.addEventListener('change', () => sliderElement.noUiSlider.set(valueElement.value));

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});

typeForm.addEventListener('change', () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minPrice[typeForm.value],
      max: 100000
    },
  });
});

export { sliderElement };
