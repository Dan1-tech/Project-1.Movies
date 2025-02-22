
`use strict`;


let numberOfFilms;
    

function start(){
    numberOfFilms = +prompt(`How many movies have you watched?`);

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`How many movies have you watched?`);
    }
}
start();


const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors : {},
    genres : [],
    privat : true
};




function rememberMyFilms(){
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
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log(`You watch little movies`);
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log(`You are kino critic`);
    }else if (personalMovieDB.count >= 30){
        console.log(`You are kino maniac`);
    }else{
        console.log(`Error`);
    }
        
}

detectPersonalLevel();


function showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(`General object`);
    }else {
        console.log(`Not General object`);
    }
}

showMyDB();

function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1] =  prompt(`Your favourite genre under number ${i}`);    
    }
}

writeYourGenres();


console.log(personalMovieDB);





