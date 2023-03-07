const API_TOKEN = "d6c303c9";

export async function searchMovies({ search }) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_TOKEN}&s=${search}`
    );
    const json = await response.json();

    const movies = json.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      poster: movie.Poster,
      year: movie.Year,
      type: movie.Type,
    }));
    
  } catch (e){
    throw new Error("Error searching movies");
  }
}
