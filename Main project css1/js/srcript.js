// snake_case
// UPPER_SNAKE_CASE
// kebab-case
// PascalCase
// const userName = 'John';
// let userNumber = 25;
// userNumber = 24;
const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

const personalMovieDB = {
      count:numberOfFilms,
      movies:{},
      actors:{},
      genres:[],
      privat:false
};

const a = prompt("Какой последний фильм вы посмотрели?", ""),
      b = prompt("Как вы его оцените?", ""),
      c = prompt("Какой последний фильм вы посмотрели?", ""),
      d = prompt("Как вы его оцените?", "");

 personalMovieDB.movies[a] = b;