import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

let movies = [];

export const home = async (req, res) => {
  const movies = await getMovies();
  res.render("home", { pageTitle: "Movies!", movies });
};

export const movieDetail = async (req, res) => {
  const { id } = req.params;
  const movie = await getMovieById(id);
  res.render("detail", { pageTitle: `${movie.title}`, movie });
};

export const filterMovie = async (req, res) => {
  const { year, rating } = req.query;
  if (rating) {
    const movies = await getMovieByMinimumRating(rating);
    //console.log("length: ", movies.length);
    return res.render("home", {
      pageTitle: `Searching by Rating ${rating}`,
      movies,
    });
  } else {
    const movies = await getMovieByMinimumYear(year);
    //console.log("length: ", movies.length);
    return res.render("home", {
      pageTitle: `Searching by Year ${year}`,
      movies,
    });
  }
};
