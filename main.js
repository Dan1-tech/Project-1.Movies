
`use strict`;


const numberOfFilms = +prompt(`How many movies have you watched?`);
    
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors : {},
    genres : [],
    privat : false
};


for (let i = 0;i < 2; i++ ) {
    const  a = prompt(`What is the last movie you watched?`);
           b = prompt(`What is your rating for the movie?`);
      
    if(a != null && b != null && a != `` && b != `` && a.length < 50){
        personalMovieDB.movies[a] = b;
    }else {
        console.log(`error`);
        i--;
    }
    
}

if (personalMovieDB.count < 10){
    console.log(`You watch little movies`);
}else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
    console.log(`You are kino critic`);
}else if (personalMovieDB.count >= 30){
    console.log(`You are kino maniac`);
}else{
    console.log(`Error`);
}
    


console.log(personalMovieDB);





