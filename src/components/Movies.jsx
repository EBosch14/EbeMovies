function RenderMovies({ movies }) {
  return movies.map((movie) => {
    return (
      <li key={movie.id}>
        <img src={movie.poster} alt={movie.Title} />
        <h3>{movie.title}</h3>
        <span>{movie.year}</span>
      </li>
    );
  });
}

function NoResultMovies() {
  return <p>Not found movie :(</p>;
}

function NoSearchMovies() {
  return <p>Search any movie...</p>;
}

export default function ({ movies, search }) {
  const hasMovie = movies?.length > 0;

  return (
    <ul className="movies">
      {hasMovie ? (
        <RenderMovies movies={movies} />
      ) : search ? (
        <NoResultMovies />
      ) : (
        <NoSearchMovies />
      )}
    </ul>
  );
}
