import {advertisement} from './createAdvertisment.js';
import {renderAdvertisment, container } from './rendering.js';

//Добавлем элементы первого значения массива advertisement на страницу
container.append(renderAdvertisment(advertisement[0]));


