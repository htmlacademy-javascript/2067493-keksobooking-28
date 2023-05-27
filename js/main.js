import { getData } from './api.js';
import { loadMap, markerUser, map} from './rendering-map.js';
import { getInactiveState, getActiveState } from './page-status.js';
import { adForm, filtersForm } from './constains.js';
import { slider } from './slider.js';
import { setForm } from './form.js';
import { setFilters} from './filters.js';
//Задаем странице не активное состояние
getInactiveState(adForm);
getInactiveState(filtersForm);
//Загружаем карту
console.log('Неактивное состояние страницы');
loadMap()
  .then(() => getActiveState(adForm))
  .then(() => markerUser.addTo(map))
  .then(() => {
    setForm();
  })
  .then(() => {
    getData()
      .then((data) => {
        setFilters(data);
      })
      .then(() => {
        getActiveState(filtersForm);
      })
      .catch(() => {
        console.log('Данные не загружены');
      });
  })
  .catch(() => {
    console.log('Карта не загружена');
  });


