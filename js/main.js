import { getData } from './api.js';
import { loadMap,} from './rendering-map.js';
import { getInactiveState, getActiveState } from './page-status.js';
import { adForm, filtersForm } from './constains.js';
// import { setForm } from './form.js';
import { setFilters} from './filters.js';
//Задаем странице не активное состояние
getInactiveState(adForm);
getInactiveState(filtersForm);
//Загружаем карту
console.log('Неактивное состояние страницы');
loadMap()
  .then(() => getActiveState(adForm))
  //Если карта загрузилась, то загружаем данные
  .then(() => {
    getData()
      //Если данные загрузились, создаем маркеры на основе этих данных
      .then((data) => {
        console.log(data);
        setFilters(data);
        // setForm();
        console.log('Данные загруженны');
      })
      .then(() => {
        getActiveState(filtersForm);
        console.log('Ативное состояние фильтров');
      })
      //Если данные не загрузились, выдать сообщение в консоль
      .catch(() => {
        console.log('Данные не загружены');
      });
  })
  //Если карта не загрузилась выдать сообщение в консоль
  .catch(() => {
    console.log('Карта не загружена');
  });


