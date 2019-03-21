
const categTriller =()=>{
let arrTriller = ['0084787','0758746','0070047']
for (let i=0; i<arrTriller.length; i++){
let condition = arrTriller[i];
    getData(condition)
}
}
const categComedy =()=>{
    let arrComedy = ['4843012','0110475','0099785']
    for (let i=0; i<arrComedy.length; i++){
    let condition = arrComedy[i];
        getData(condition)
    }
    }
const categFiccion =()=>{
        let arrComedy = ['0083866','0088763','0116629']
        for (let i=0; i<arrComedy.length; i++){
        let condition = arrComedy[i];
            getData(condition)
    }
    }
    const categDrama =()=>{
        let arrComedy = ['0031381','0120338','0118799']
        for (let i=0; i<arrComedy.length; i++){
        let condition = arrComedy[i];
            getData(condition)
    }
    }
    const categAccion =()=>{
        let arrComedy = ['0083944','4912910','0816711']
        for (let i=0; i<arrComedy.length; i++){
        let condition = arrComedy[i];
            getData(condition)
    }
    }
const getData = (condition) => {
let dataBase = [];
    fetch (`http://www.omdbapi.com/?i=tt${condition}&apikey=9d065953`)// le damos la ruta que queremos seguir, si es una api publicada le damos la url que queremos que siga
    .then(Response => {   
        return Response.json()// va a leer los archivos json
    })
    .then(data =>{
        console.log(data.imdbID)
        document.getElementById("root").innerHTML += `
        <div class="col-md-4 mt-4">
        <div class="card profile-card-5">
            <div class="card-img-block">
                <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
            </div>
            <div class="card-body pt-0">
            <h5 class="card-title">${data.Title}</h5>
            <p>${data.Genre}</p>
            <p>${data.Year}</p>
            <p class="card-text">${data.Plot}</p>
            <a href="https://www.imdb.com/title/${data.imdbID}" class="btn btn-primary">imdbID Oficial</a>
          </div>
        </div>
        <p class="mt-3 w-100 float-left text-center"></p>
    </div>`
//         <div class="card" style="width: 13rem;">
//   <img src="${data.Poster}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <p class="card-text">${data.Title}</p>
//     <p>${data.Genre}</p>
//     <p>${data.Year}</p>
//     <p>${data.Plot}</p>
// </div></div>
        seeData(data);// aqui llamo la funcion que declaramos mas abajo
    })
    .catch(error => error)
    }
 window.onload=categTriller();
 window.onload=categComedy();
 window.onload=categFiccion();
