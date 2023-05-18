//Сылка получения данных с сервера
const GET_URL = 'https://28.javascript.pages.academy/keksobooking/data';
//Ссылка отправки данных
const POST_URL = 'https://28.javascript.pages.academy/keksobooking';
//Находим форму для заполнения и отправки данных на сервера
const adForm = document.querySelector('.ad-form');
//Находим фильтры
const filtersForm = document.querySelector('.map__filters');
//Настройкий лефлета по умолчанию
const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//Настройки карты по умолчанию: увелечение и центральные координаты соответсвенно
const ZOOM = 10;
const CITY_CENTER = {
  lat: 35.6895,
  lng: 139.692,
};
//Внешний вид специального маркера
const ICON_MARKER_USER = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});
//Внишний вид маркера похожих объявлений
const ICON_MARKER_ADVERTISMENT = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
//Экспортируем данные
export {GET_URL, adForm, filtersForm, TILE_LAYER, COPYRIGHT, ZOOM, CITY_CENTER, ICON_MARKER_ADVERTISMENT, ICON_MARKER_USER, POST_URL };
