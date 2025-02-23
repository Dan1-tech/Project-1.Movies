
`use strict`;


const personalMovieDB = {
    count : 0,
    movies: {},
    actors : {},
    genres : [],
    privat : true,
    start : function(){
        personalMovieDB.count = +prompt(`How many movies have you watched?`);

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`How many movies have you watched?`);
        }
    },
    rememberMyFilms : function(){
        for (let i = 0;i < 2; i++ ) {
            const  a = prompt(`What is the last movie you watched?`).trim(),
                   b = prompt(`What is your rating for the movie?`);
              
            if(a != null && b != null && a != `` && b != `` && a.length < 50){
                personalMovieDB.movies[a] = b;
            }else {
                console.log(`error`);
                i--;
            }  
        }
    },
    detectPersonalLevel : function(){
        if (personalMovieDB.count < 10){
            console.log(`You watch little movies`);
        }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log(`You are kino critic`);
        }else if (personalMovieDB.count >= 30){
            console.log(`You are kino maniac`);
        }else{
            console.log(`Error`);
        }
    },
    showMyDB : function(){
        if (personalMovieDB.privat == false){
            console.log(`General object`);
        }else {
            console.log(`Not General object`);
        }
    },toogleVisibleMyDB : function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres : function(){
        for (let i = 1; i < 4; i++){
           let genre =  prompt(`Your favourite genre under number ${i}`);
            
           if (genre== null || genre == ``){
                personalMovieDB.genres[i - 1] = prompt(`Your favourite genre under number ${i}`);
                i--;
            }else {
            personalMovieDB.genres[i - 1] = genre;
            }    
        }
        personalMovieDB.genres.forEach((item,i) => {
        console.log(`My favourite genre ${i + 1} - its ${item}`);
        });
    }
};

console.log(personalMovieDB);





