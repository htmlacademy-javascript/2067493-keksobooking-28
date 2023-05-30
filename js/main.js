import { getData } from './api.js';
import { showMessageErrorDate } from './popups.js';
import { loadMap, markerUser, map } from './rendering-map.js';
import { getInactiveState, getActiveState } from './page-status.js';
import { adForm, filtersForm, TILE_LAYER, COPYRIGHT } from './constains.js';
import { setUserFormReset, setUserFormSubmit } from './form.js';
import { setFilters } from './filters.js';

//=============================== НЕ АКТИВНОЕ СОСТОЯНИЕ СТРАНИЦЫ=========================================
getInactiveState(adForm);
getInactiveState(filtersForm);

//============================== ЗАГРУЗКА ДАННЫХ =====================================================
loadMap()
  .then(() => getActiveState(adForm))
  .then(() => {
    L.tileLayer(TILE_LAYER, {
      attribution: COPYRIGHT
    }).addTo(map);
  })
  .then(() => markerUser.addTo(map))
  .then(() => setUserFormReset())
  .then(() => setUserFormSubmit())
  .then(() => {
    getData()
      .then((data) => setFilters(data))
      .then(() => getActiveState(filtersForm))
      .catch(() => showMessageErrorDate('Произошла ошибка загрузки данных'));
  })
  .catch(() => showMessageErrorDate('Произошла ошибка загрузки карты'));


