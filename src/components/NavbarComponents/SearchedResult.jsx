import React from 'react';
import {Section, Image, MovieLink} from '../../styles/Navbar/NavbarSearchStyles'

const SearchedResult = ({ image, title, id}) => {
  return (
    <Section>
      <Image src={image}/>
      <MovieLink to={`/movie/${id}`}>{title}</MovieLink>
    </Section>
  );
}

export {SearchedResult}