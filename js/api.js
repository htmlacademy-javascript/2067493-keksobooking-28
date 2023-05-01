import { GET_URL } from './constains.js';

const getData = () =>
  fetch(GET_URL)
    .then((response) => {
      if(response.ok){
        return response.json();
      } else{
        throw new Error;
      }
    });

export { getData };
