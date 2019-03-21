const getData2 = (condition) => {
    let dataBase = [];
        fetch (`
        https://api.themoviedb.org/3/movie/550?api_key=13481584e80d11325605fbaf0b642876`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
        .then(Response => {   
            return Response.json()// va a leer los archivos json
        })
        .then(data =>{
            console.log(data)
           // document.getElementById("root").innerHTML += `
           // <div class="col-md-4 mt-4">
           // <div class="card profile-card-5">
              //  <div class="card-img-block">
                   // <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
               // </div>
               // <div class="card-body pt-0">
                //<h5 class="card-title">${data.Title}</h5>
                //<p>${data.Genre}</p>
               // <p>${data.Year}</p>
               // <p class="card-text">${data.Plot}</p>
               // <a href="https://www.imdb.com/title/${data.imdbID}" class="btn btn-primary">imdbID Oficial</a>
              //</div>
           // </div>
             
        })
        .catch(error => error)
        }
        window.onload=getData2();