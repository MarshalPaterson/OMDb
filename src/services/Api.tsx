class API {
  getMovies(URL) {
    const url = URL; 
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

  getMovieById(id) {
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
