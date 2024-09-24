import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
        <br />
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "http://via.placeholder.com/400"
          }
        ></img>
      </div>

      <div>
        
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
