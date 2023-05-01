// import {advertisement} from './renderAdvertisment.js';
import { renderAdvertisment, container } from './render-Advertisment.js';
import { getData } from './api.js';
//Добавлем элементы первого значения массива advertisement на страницу


getData()
  .then((data) => {
    console.log(data);
    renderAdvertisment(data[0]);
    container.append(renderAdvertisment(data[0]));
  })
  .catch();

