import React, { useState, useEffect } from "react";
import CardsTablet from './CardsTablet';
import './Films.css';

const FilmsTablet = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(r => r.json())
        .then(r => setFilms(r));
            

    },  []);

    return (
        <div className="films">
          {films.map((film) => {
           return <CardsTablet
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

export default FilmsTablet;