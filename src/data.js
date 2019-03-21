const getData2 = (condition) => {

  let dataBase = [];
      fetch (`https://api.themoviedb.org/3/discover/movie?api_key=13481584e80d11325605fbaf0b642876&with_genres=18&primary_release_year=2014`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
      
      .then(Response => {   
          return Response.json()// va a leer los archivos json
      })
      .then(data =>{
         console.log(data)
         for (let i=0; i<4; i++){
          document.getElementById("root").innerHTML += `
          <div class="col-md-4 mt-4">
          <div class="card profile-card-5">
              <div class="card-img-block">
                  <img class="card-img-top" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.results[i].poster_path}" alt="Card image cap">
              </div>
              <div class="card-body pt-0">
              <h5 class="card-title">${data.results[i].title}</h5>
              <p>Mejor Ranking: ${data.results[i].vote_average}</p>
              <p>Popularidad : ${data.results[i].popularity}</p>
              <p class="card-text">${data.results[i].overview}</p>
              <a href="https://www.imdb.com/title/tt${data.results[i].id}" class="btn btn-primary">imdbID Oficial</a>
            </div>
          </div>
      </div>`
         }
      })
      .catch(error => error)
      }

      
      window.onload=getData2();


