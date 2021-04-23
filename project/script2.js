
"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Number of films you have watched", "");

    if (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Number of films you have watched", "");
    } else {
        numberOfFilms = alert("Thanks!");
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: ["Комедия", "Драма", "Ужасы"],
    privat: false
};


function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
    const a = prompt("Last watched movie?", ""),
          b = prompt("How would you rate it?", "");
          if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies [a] = b;
            console.log("done")
        } else {
            console.log("error");
            i--;
        }
   
    }
}

rememberMyFilms();
    // let a = prompt("Last watched movie?", ""),
    //       b = prompt("How would you rate it?", "");
    // while(a < 2) {
    //     a++;
    // }
    // while(b < 2) {
    //     b++;
    // }
    // if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    //      personalMovieDB.movies [a] = b;
    //         console.log("done")
    //     } else {
    //         console.log("error");
    //         i--;
    //     }

function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
    console.log("Просмотрено мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы частый зритель");
} else {
    console.log("Вы киноман");
}
console.log(personalMovieDB);
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
      console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();



