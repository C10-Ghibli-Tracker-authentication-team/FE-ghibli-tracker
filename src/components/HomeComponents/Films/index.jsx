import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import '../../../index.css';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((r) => r.json())
      .then((r) => setFilms(r))
  }, []);

  return (
    <div className="films">
      {films.map((film) => {
        return (
          <Cards
            image={film.image}
            title={film.title}
            year={film.release_date}
            description={film.description}
            key={film.id}
          />
        );
      })}
    </div>
  );
};

export default Films;
