//Функция для создания рандомных целых чисел
function getRandomInteger(a, b) {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

//Функция для создания чисел с плавающей точкой
function getRandomNumberFloat(a, b) {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(5);
}

//Функция для нахождения рандомного элемента в массиве
function randomElements (element) {
  return element[getRandomInteger(0, element.length - 1)];
}

//Функция для создания массива со случайной длинной
function randomArray (array) {
  return array.slice(getRandomInteger(0, array.length - 2), getRandomInteger(1, array.length - 1));
}
export{getRandomNumberFloat, getRandomInteger, randomElements, randomArray};

