import React, { useEffect } from 'react';
import {
  Container,
  ContainerNavbar,
  ContainerMovies,
  RightIcons,
  Input,
} from '../../styles/Navbar/NavbarSearchStyles';
import { SearchedResult } from './SearchedResult';
import filter from './assets/filter.svg';
import arrow from './assets/arrow-back.svg';
import search from './assets/search.svg';
import { Link } from 'react-router-dom';

const NavbarSearch = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [films, setFilms] = React.useState([]);

  let searchedMovies = [];

  if (!searchValue >= 1) {
    searchedMovies = films;
  } else {
    searchedMovies = films.filter((film) => {
      const filmText = film.title.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return filmText.includes(searchText);
    });
  }

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((r) => r.json())
      .then((r) => setFilms(r));
  }, []);

  return (
    <>
      <Container>
        <ContainerNavbar className='container-menu'>
          <Link to={'/'}>
            <img src={arrow} alt='back' className='arrow-icon' />
          </Link>
          <RightIcons>
            <Input
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              type='search'
              spellCheck='false'
              placeholder='Buscar una película...'
              onChange={onSearchValueChange}
            />
            <Link to={'/filter'}>
              <img src={filter} alt='filter button'></img>
            </Link>
            <Link to={'/search'}>
              <img src={search} alt='search' className='search-icon' />
            </Link>
          </RightIcons>
        </ContainerNavbar>
        <ContainerMovies>
          {searchedMovies.map((film) => {
            return (
              <SearchedResult
                image={film.image}
                title={film.title}
                key={film.id}
              />
            );
          })}
        </ContainerMovies>
      </Container>
    </>
  );
};

export default NavbarSearch;
