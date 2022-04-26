import React from 'react';
import {
  Section,
  Image,
  Data,
  H2,
  H3,
  P,
  Rate,
  Toggle,
} from '../../Styles/CardsStyles';
import Stars from '../Stars';
import ReactStars from 'react-rating-stars-component';
import FavIcon from '../ToggleHeart';

const Cards = ({ image, title, year, description }) => {
  return (
    <>
      <Section>
        ,
        <Image src={image} alt="film image" />
        <Data className="card_data">
          <H2 className="title">{title}</H2>
          <H3 className="year">{year}</H3>
          {
            <P className="description" id="description">
              {description}
            </P>
          }
          <Rate className="App">
            <ReactStars {...Stars} />
            <Toggle className="FavIcon">
              <FavIcon />
            </Toggle>
          </Rate>
        </Data>
      </Section>
    </>
  );
};

export default Cards;
