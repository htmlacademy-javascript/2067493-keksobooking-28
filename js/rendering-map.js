// Отображение карты
import { TILE_LAYER, COPYRIGHT, ZOOM, CITY_CENTER, ICON_MARKER_ADVERTISMENT, ICON_MARKER_USER } from './constains.js';
import { renderAdvertisment } from './render-Advertisment.js';
//Создаем карты в необходимом блоке
const map = L.map('map-canvas');
//формула создания маркера похожих объявлений
const createMarkerAdvertisment = (data) => {
  //Перебираем данные и для каждого созадаем свой маркер на карте
  data.forEach((dataItem) => {
    //Создаем маркер и размещаем его в соответсвующих координатах
    const marker = L.marker({
      lat: dataItem.location.lat,
      lng: dataItem.location.lng
    },
    //Задаем внешний вид маркеру
    {
      icon: ICON_MARKER_ADVERTISMENT
    });
    //Добавляем маркер на карту и добавляем ему соответсвующий попап с информацией
    marker.addTo(map)
      .bindPopup(renderAdvertisment(dataItem));
  });
};
//Формула загрузки карты: Созадаем обещаение(Promise)
const loadMap = () => new Promise((resolve, reject) => {
  //По событию загрузки карты выводим сообщение в консоль после задаем карте координаты и масштаб
  map.on('load', () => {
    console.log('Карта инициализированная');
    resolve(true);
  }).setView(CITY_CENTER, ZOOM);
  //Создаем слой карты
  L.tileLayer(TILE_LAYER, {
    attribution: COPYRIGHT
  }).addTo(map);
  //Создаем специальный маркер на карте.
  const markerUser = L.marker(
    CITY_CENTER,
    {
      draggable: true,
      icon: ICON_MARKER_USER
    });
  //Добавляем специальный маркер на карту
  markerUser.addTo(map);
  //Создаем событие вывести координаты специального маркера в консоль при его конечном положение
  markerUser.on('moveend', (evt) => {
    console.log(evt.target.getLatLng());
  });
});

export { loadMap, createMarkerAdvertisment, map };
