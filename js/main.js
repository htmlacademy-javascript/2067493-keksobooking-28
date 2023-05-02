import {adForm, filtersForm} from './constains.js';
import { renderAdvertisment, container } from './render-Advertisment.js';
import { getData } from './api.js';
import {getInactiveState} from './inactive-state.js';

getInactiveState(adForm);
getInactiveState(filtersForm);

getData()
  .then((data) => {
    renderAdvertisment(data[3]);
    container.append(renderAdvertisment(data[3]));
  })
  .catch();

