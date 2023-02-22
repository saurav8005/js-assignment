let input = document.getElementById("input-movie");
let search = document.getElementById("btn-search");
let result = document.getElementById("result");


search.addEventListener('click', function searchMovie() {
    let inputValue = input.value;
    let apiKey = "2e2d6ce4";
    let Url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${inputValue}` ;
    const images = `http://www.omdbapi.com/?apikey=${apiKey}&`;

    fetch(Url)
        .then((res)=> res.json())
        .then((response) => {
            const movie = response
            const postUrl = `${images}&i=${movie.imdbID}`;
            const html = `
                   <div>
                   <img src="${postUrl}" alt="${movie.Title}" >
                   <p>Released in  ${movie.Year}</p>
                   <p>IMDB Rating : ${movie.imdbRating} </p>
                   <p>Cast : ${movie.Actors} </p>
                   <p>Director : ${movie.Director} </p>
                   
                   </div>
            `;
            result.innerHTML = html;
        }).catch((err) => {
            if(err){
                console.log(err)
            }
        });
    
})