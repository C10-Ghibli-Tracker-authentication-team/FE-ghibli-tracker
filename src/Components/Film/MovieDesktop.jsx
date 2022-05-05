import React, { useState, useEffect } from "react";
import FilmDetails from './FilmDetails';
import '../index.css';

const MovieDesktop = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(r => r.json())
        .then(r => setFilms(r));

        const { Movies, Selected } = useState(null);
        const filteredMovies = Movies
          .filter(Movie => Movies.id === Selected)
          .map(Movie => ()

            

    },  []);

    return (
        <div className="movie">
          {films.map((film) => {
           return <FilmDetails
                    image={film.image}
                    title={film.title}
                    year={film.release_date}
                    description={film.description}
                    key={film.id}
                    />;
          })}
        </div>
      );
    };

export default MovieDesktop;