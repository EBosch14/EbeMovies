function RenderMovies({movies}) {
  return (movies.map((movie) => {
    return (
      <li key={movie.id}>
        <img src={movie.poster} alt={movie.Title} />
        <h3>{movie.title}</h3>
        <span>{movie.year}</span>
      </li>
    );
  }));
}

function NoResultMovies() {
  return <p>Not found movie :(</p>;
}

export default function ({ movies }) {
  const hasMovie = movies?.length > 0;

  return (
    <ul className="movies">
      {hasMovie ? <RenderMovies movies={movies} /> : <NoResultMovies />}
    </ul>
  );
}
