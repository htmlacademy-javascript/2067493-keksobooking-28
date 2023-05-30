
import { GET_URL, POST_URL } from './constains.js';

//---------------------Получение данных с сервера---------------------
const getData = () =>
  fetch(GET_URL)
    .then((response) => {
      if(response.ok){
        return response.json();
      } else{
        throw new Error;
      }
    });

//-----------------Настройки отправки данных на сервер-------------------
const postData = (body) =>
  fetch(POST_URL, {
    method: 'post',
    body
  });

export { getData, postData };

