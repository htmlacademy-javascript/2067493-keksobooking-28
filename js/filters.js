import { createMarkerAdvertisment, markerGroup } from './rendering-map.js';
import { MAX_FILTERS } from './constains.js';
import { debounce } from './utils.js';
const formFilters = document.querySelector('.map__filters');
const points = [];
const model = {
  features: []
};

const getTypeHousing = (filter, data) => model[filter] !== 'any' ? data.slice().filter((dataItem) => dataItem.offer.type === model[filter]) : data.slice();

const getHousingRooms = (filter, data) => model[filter] !== 'any' ? data.slice().filter((dataItem) => dataItem.offer.rooms === model[filter] * 1) : data.slice();

const getHousingGuests = (filter, data) => model[filter] !== 'any' ? data.slice().filter((dataItem) => dataItem.offer.guests === model[filter] * 1) : data.slice();

const getPriceHousing = (filter, data) => {
  switch (model[filter]) {
    case 'any':
      return data.slice();
    case 'low':
      return data.slice().filter((dataItem) => dataItem.offer.price < 10000);
    case 'middle':
      return data.slice().filter((dataItem) => dataItem.offer.price >= 10000 && dataItem.offer.price < 50000);
    case 'high':
      return data.slice().filter((dataItem) => dataItem.offer.price >= 50000);
  }
};

const getFeatures = (filter, data) => model[filter].reduce((acc, filterItem) => acc.filter((accItem) => accItem.offer.features?.includes(filterItem)), data);

const getFilteredPoints = (filter, data) => {
  switch (filter) {
    case 'housing-type':
      return getTypeHousing(filter, data);
    case 'housing-price':
      return getPriceHousing(filter, data);
    case 'housing-rooms':
      return getHousingRooms(filter, data);
    case 'housing-guests':
      return getHousingGuests(filter, data);
    case 'features':
      return model.features.length ? getFeatures(filter, data) : data;
  }
};

const filterPoints = () => Object.keys(model)
  .reduce((acc, filter) => getFilteredPoints(filter, acc), points.slice());

const changeModel = (filter, value) => {
  if (filter !== 'features') {
    model[filter] = value;
  } else if (model[filter].some((element) => element === value)) {
    model[filter].splice(model[filter].indexOf(value), 1);
  } else {
    model[filter].push(value);
  }
  console.log(model);
};

formFilters.addEventListener('change', debounce((evt) => {
  markerGroup.clearLayers();
  changeModel(evt.target.name, evt.target.value);
  console.log(filterPoints());
  createMarkerAdvertisment(filterPoints().slice(0, MAX_FILTERS));
}, 500));

const resetModel = () => {
  Object.keys(model).forEach((item) => {
    console.log('item ', item);
    if(item === 'features') {
      model[item].length = 0;
    } else {
      model[item] = 'any';
    };
  });
};

formFilters.addEventListener('reset', () => {
  resetModel();
  console.log(model);
  markerGroup.clearLayers();
  createMarkerAdvertisment(filterPoints().slice(0, MAX_FILTERS));
});

const setFilters = (data) => {
  points.push(...data.slice());
  createMarkerAdvertisment(points.slice(0, MAX_FILTERS));
};

export { setFilters };
