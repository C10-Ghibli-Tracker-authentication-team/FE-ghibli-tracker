import React from 'react';
import {Section, Image, H2} from '../../styles/Navbar/NavbarSearchStyles'

const SearchedResult = ({ image, title}) => {
  return (
    <Section>
      <Image src={image}/>
      <H2>{title}</H2>
    </Section>
  );
}

export {SearchedResult}