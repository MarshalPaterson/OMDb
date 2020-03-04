import {MD5} from 'react-native-crypto-js';

const BASE_URL = 'http://www.omdbapi.com/'; // http://www.omdbapi.com/?i=tt3896198&apikey=51f00cb9
const PRIVATE_KEY = '';
const PUBLIC_KEY = '51f00cb9';

function objectToQueryParameters(paramObject) {
  let queryParameters = '?';
  Object.keys(paramObject).forEach(key => {
    queryParameters += key + '=' + paramObject[key] + '&';
  });

  queryParameters = queryParameters.slice(0, queryParameters.length - 1);

  return queryParameters;
}

class API {
  getMovies(additionalParams, URL) {
    const timestamp = Number(Date.now());
    const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const params = {
      ...additionalParams,
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
    };
    const url = URL; // "http://www.omdbapi.com/?i=tt3896198&apikey=51f00cb9";
    console.log(url);
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(data => reject(data));
    });
  }


  getMovieById(id, additionalParams) {
    const timestamp = Number(Date.now());
    const hash = MD5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const params = {
      ...additionalParams,
      ts: timestamp,
      apikey: PUBLIC_KEY,
      hash,
    };
    const url = "http://www.omdbapi.com/?i="+ id +"&apikey=51f00cb9";
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      })
      .then(response => response.json())
      .then((data) => resolve(data))
      .catch(data => reject(data));
    });
  };
}


const apiSingleton = new API();
export default apiSingleton;
