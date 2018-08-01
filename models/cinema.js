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

Cinema.prototype.areThereFilmsFromParticularYear = function (year) {
  if (this.films.filter(film => film.year === year)) {return true};
};

Cinema.prototype.allFilmsAreOverDuration = function (duration) {
  // return (this.films.filter(film => film.length >= duration)).length === this.films.length;
  return this.films.every(film => film.length > duration);
};

Cinema.prototype.calculateTotalRunningTime = function () {
  // const lengths = this.films.map(film => film.length);
  // return lengths.reduce((sum, length) => sum + length);
  return (this.films.map(film => film.length)).reduce((sum, length) => sum + length);
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter(film => film[property] === value);
};

module.exports = Cinema;
