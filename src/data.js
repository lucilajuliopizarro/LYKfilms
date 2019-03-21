// const categoria =()=>{
//   let arrCategoria = ['18','35','29','12']
//   for (let i=0; i<arrCategoria.length; i++){
//   let condition = arrCategoria[i];
//       getData(condition)
//   }


const getData2 = () => {
      fetch (`https://api.themoviedb.org/3/discover/movie?api_key=13481584e80d11325605fbaf0b642876&with_genres=18&primary_release_date.gte=1900&primary_release_date.lte=1980`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
      
      .then(Response => {   
          return Response.json()// va a leer los archivos json
      })
      .then(data =>{
         console.log(data)
         for (let i=0; i<4; i++){
          document.getElementById("root").innerHTML += `
          <div class="row">
              <div class="col-sm">
          <div class="card profile-card-5">
              <div class="card-img-block">
                  <img class="card-img-top" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.results[i].poster_path}" alt="Card image cap">
              </div>
              <div class="card-body pt-0">
              <h5 class="card-title">${data.results[i].title}</h5>
              <h5 class="card-title">${data.results[i].release_date}</h5>
              <p>Puntuación
              de
              usuario: ${data.results[i].vote_average*10}%</p>
              <p>Popularidad : ${data.results[i].popularity}</p>
              <p class="card-text">${data.results[i].overview}</p>
              </div>
          </div>
          </div>
      </div>`
         }
      })
      .catch(error => error)
      }

      const getData1 = () => {
        fetch (`https://api.themoviedb.org/3/discover/movie?api_key=13481584e80d11325605fbaf0b642876&with_genres=35&primary_release_date.gte=1900&primary_release_date.lte=1980`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
        
        .then(Response => {   
            return Response.json()// va a leer los archivos json
        })
        .then(data =>{
           console.log(data)
           for (let i=0; i<4; i++){
            document.getElementById("root").innerHTML += `
            <div class="row">
                <div class="col-sm">
            <div class="card profile-card-5">
                <div class="card-img-block">
                    <img class="card-img-top" src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.results[i].poster_path}" alt="Card image cap">
                </div>
                <div class="card-body pt-0">
                <h5 class="card-title">${data.results[i].title}</h5>
                <h5 class="card-title">${data.results[i].release_date}</h5>
                <p>Puntuación
                de
                usuario: ${data.results[i].vote_average*10}%</p>
                <p>Popularidad : ${data.results[i].popularity}</p>
                <p class="card-text">${data.results[i].overview}</p>
                </div>
            </div>
            </div>
        </div>`
           }
        })
        .catch(error => error)
        }
 
    window.onload=getData2();

    window.onload=getData1();
