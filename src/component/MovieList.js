import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies, onDelete, search , rate }) => {
  return (
    <div className="list">
      {movies       
                    
        .filter((movie) =>
          movie.movieName.toLowerCase().includes(search.toLowerCase().trim())
        )
        .filter((movie)=> movie.rating >= rate)

        
     
        .map((movie) => (
          <div key={movie.id} className="card">
            <Movie movie={movie} onDelete={onDelete} search={search} rate={rate}/>
          </div>
        ))}
    </div>
  );
};

export default MovieList;
