/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";

// Add your magic here!
export const home = async (req, res) => {
  const movies = await Movie.find({});
  res.render("home", { pageTitle: "Home", movies });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, summary, year, rating, genres } = req.body;
  try {
    await Movie.create({
      title: title,
      summary: summary,
      year: year,
      rating: rating,
      genres: genres.split(","),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Movie",
      errorMessage: error._message,
    });
  }
};

export const detail = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("detail", {
    pageTitle: `Details of ${movie.title}`,
    movie,
  });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found" });
  }
  return res.render("edit", {
    pageTitle: `Edit Movie ${movie.title}`,
    movie,
  });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, summary, year, rating, genres } = req.body;
  const movie = await Movie.findOne({ _id: id });
  if (!movie) {
    return res.render("404", { pageTitle: "Movie not found" });
  }
  await Movie.findByIdAndUpdate(id, {
    title: title,
    summary: summary,
    year: year,
    rating: rating,
    genres: genres.split(","),
    //hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/movies/${id}`);
};

export const remove = async (req, res) => {
  const { id } = req.params;
  try {
    await Movie.findByIdAndRemove(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};

export const search = async (req, res) => {
  const { title } = req.query;
  let movies = [];
  if (title) {
    movies = await Movie.find({
      title: {
        $regex: new RegExp(title, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", movies });
};
