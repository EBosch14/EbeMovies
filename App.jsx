import { useState } from "react";
import "./App.css";
import Movies from "./src/components/Movies";
import { useMovies } from "./src/hooks/useMovies";

export default function () {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const { movies, getMovies } = useMovies({search});

  const handleSumbit = (event) => {
    event.preventDefault();
    if (search !== "") {
      getMovies();
      console.log({ search });
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

  return (
    <div className="Page">
      <header>
        <h1>EbeMovies</h1>
        <form className="form" onSubmit={handleSumbit}>
          <input
            name="inputMovie"
            type="text"
            placeholder="Terminator, Avengers, the Incredibles..."
            onChange={handleChange}
            value={search}
            autoComplete="off"
          />
          <button type="submit">Search</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
