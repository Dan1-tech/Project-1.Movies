

let filmsCount = prompt(`How many movies have you watched?`);
    a = prompt(`What is the last movie you watched?`);
    b = prompt(`What is your rating for the movie?`);
    c = prompt(`What is the last movie you watched?`);
    d = prompt(`What is your rating for the movie?`);

const numberOfFilms = filmsCount;




const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors : {},
    genres : [],
    privat : false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



console.log(personalMovieDB);





