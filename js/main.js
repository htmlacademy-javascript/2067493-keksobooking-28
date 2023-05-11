import { adForm, filtersForm } from './constains.js';
import { getData } from './api.js';
import { getInactiveState } from './inactive-state.js';
import { loadMap, createMarkerAdvertisment } from './rendering-map.js';
import {getActiveState} from './active-state.js';
//Задаем странице не активное состояние
getInactiveState(adForm);
getInactiveState(filtersForm);
//Загружаем карту
loadMap()
  //Если карта загрузилась, то загружаем данные
  .then(() => {
    getData()
      //Если данные загрузились, создаем маркеры на основе этих данных
      .then((data) => {
        console.log(data);
        createMarkerAdvertisment(data);
        console.log('Данные загруженны');
      })
      //Если данные не загрузились, выдать сообщение в консоль
      .catch(() => console.log('Данные не загружены'));
  })
  //Если карта не загрузилась выдать сообщение в консоль
  .catch(() => console.log('Карта не загружена'));
