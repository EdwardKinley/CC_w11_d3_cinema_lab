const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getListOfFilmTitles = function () {
  return this.films.map(film => film.title); // take the films array & getting the individual film object & mapping the film.title each object
};

Cinema.prototype.getFilmByTitle = function (title) {
  return this.films.find(film => film.title === title);
};

Cinema.prototype.getFilmsByGenre = function (genre) {
  return this.films.filter(film => film.genre === genre);
};

module.exports = Cinema;
