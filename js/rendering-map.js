import { TILE_LAYER, COPYRIGHT, ZOOM, CITY_CENTER, ICON_MARKER_ADVERTISMENT, ICON_MARKER_USER } from './constains.js';
import { renderAdvertisment } from './render-Advertisment.js';

//================================Создаем карту===============================================
const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);
const loadMap = () => new Promise((resolve) => {
  map.on('load', () => {
    resolve();
  }).setView(CITY_CENTER, ZOOM);
  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);
});

//=============================Маркер для объявлений=========================================
const createMarker = (obj) => {
  const marker = L.marker({
    lat: obj.location.lat,
    lng: obj.location.lng
  },
  {
    icon: ICON_MARKER_ADVERTISMENT
  });
  marker.addTo(markerGroup)
    .bindPopup(renderAdvertisment(obj));
};
const createMarkerAdvertisment = (data) => {
  data.forEach((dataItem) => {
    createMarker(dataItem);
  });
};

//============================Специальный маркер для пользователя===============================
const markerUser = L.marker(
  CITY_CENTER,
  {
    draggable: true,
    icon: ICON_MARKER_USER
  });

export { loadMap, createMarkerAdvertisment, markerGroup, markerUser, map};
