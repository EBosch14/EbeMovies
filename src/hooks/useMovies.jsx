import { useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const newSearch = await searchMovies({ search });
    setMovies(newSearch);
  };

  return { movies, getMovies };
}
