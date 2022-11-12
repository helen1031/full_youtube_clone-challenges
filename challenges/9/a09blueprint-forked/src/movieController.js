import { getMovieById, getMovies, addMovie } from "./db";

export const home = (req, res) =>
  res.render("movies", { movies: getMovies(), pageTitle: "Movies!" });

export const movieDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  const movie = getMovieById(id);
  if (!movie) {
    res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", { movie });
};

/*
Write the controller or controllers you need to render the form
and to handle the submission
*/
export const getAdd = (req, res) => {
  return res.render("add", { pageTitle: "Add Movie" });
};

export const postAdd = async (req, res) => {
  console.log(req.body);
  const { title, synopsis, genres } = req.body;
  try {
    await addMovie({
      title: title,
      synopsis: synopsis,
      genres: genres
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("add", {
      pageTitle: "Add Movie",
      errorMessage: error._message
    });
  }
};
