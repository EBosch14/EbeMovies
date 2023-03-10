import { useState } from "react";
import "./App.css";
import Movies from "./src/components/Movies";
import { useMovies } from "./src/hooks/useMovies";

export default function () {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [sort, setSort] = useState(false);
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSumbit = (event) => {
    event.preventDefault();
    if (search !== "") {
      getMovies();
    } else {
      setError("Please write any movie.");
    }
  };

  const handleChange = (event) => {
    const input = event.target.value;
    if (input.startsWith(" ")) return;
    setSearch(event.target.value);
    setError(null);
  };

  const handleSortChange = (event) => {
    setSort((prevState) => !prevState);
  };

  return (
    <div className="Page">
      <header>
        <h1>EbeMovies</h1>
        <form className="form" onSubmit={handleSumbit}>
          <div className="searchMovie">
            <input
              name="inputMovie"
              type="text"
              placeholder="Terminator, Avengers, the Incredibles..."
              onChange={handleChange}
              value={search}
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </div>
          <div className="sortMovies_container">
            <input
              type="checkbox"
              name="sortMovies"
              id="sortMovies"
              onChange={handleSortChange}
              checked={sort}
            />
            <label htmlFor="sortMovies">Sort Movies</label>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>{loading ? <p>Loading...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}
