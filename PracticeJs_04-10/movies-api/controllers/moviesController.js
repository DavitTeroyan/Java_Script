import { movies } from "../data/movies.js";

let nextId = Math.max(...movies.map(movie => movie.id)) + 1;


// GET /movies
export const getMovies = (req, res) => {
  res.json({ ok: true, count: movies.length,movies });
};

// GET /movie/:id
export const getMovie = (req, res) => {
    const id = req.params.id

    if(!id) {
    return res.status(400).send({ ok: false, message: 'Need id' });
  }
  const movie = movies.find((u) => u.id === Number(id));

  if(!movie){
    return res.status(404).json({
      ok: false,
      message: "Movie not found"
    });
  }

  res.status(200).send({message: "succes", movie})
};

// POST /movies   body: { "title": "Round", "year": 2012 }
export const createMovie = (req, res) => {

  
  const newMovie = { id: nextId++, title: req.body.title, year: req.body.year, watched: false };

  movies.push(newMovie);

  res.status(201).json({ ok: true, movie: newMovie });
};

// PUT /movies/:id   body: { "title": "Round", "year": 2012 }
export const updateMovie = (req, res) => {
  const movie = movies.find((u) => u.id === Number(req.params.id));

  if (!movie) {
    return res.status(404).json({ ok: false, message: 'Movie not found' });
  }

  movie.title = req.body.title;
  movie.year = req.body.year;
  res.json({ ok: true, movie });
};

// DELETE /movies/:id
export const deleteMovie = (req, res) => {
  const index = movies.findIndex((u) => u.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ ok: false, message: 'Movie not found' });
  }

  movies.splice(index, 1); // remove 1 item at this index
  res.json({ ok: true, message: 'Movie deleted' });
};

export const toggleWatched = (req, res) => {
    const movie = movies.find((u) => u.id === Number(req.params.id));

    if (!movie) {
        return res.status(404).json({
            ok: false,
            message: "Movie not found"
        });
    }

    movie.watched = !movie.watched;

    res.json({
        ok: true,
        movie
    });
};