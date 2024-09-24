import icon from "./search.svg";
import "./App.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard.jsx";

const API_URL = "http://www.omdbapi.com?apikey=71f4d0c0";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(search);
  }, [search]);

  return (
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img src={icon} alt="search" onClick={() => searchMovies(search)} />
      </div>

      <div className="container">
        {movies?.length !== 0 ? (
          <div className="container">
            {movies?.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
