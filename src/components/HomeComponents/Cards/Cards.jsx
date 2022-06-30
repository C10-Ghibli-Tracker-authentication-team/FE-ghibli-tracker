import React from 'react';
import {
  Section,
  Image,
  Data,
  H2,
  H3,
  P,
  Rate,
  Wrap
} from '../../../styles/Cards/CardsStyles';
import Stars from '../../GlobalComponents/Stars';
import ReactStars from 'react-rating-stars-component';
import FavIcon from '../../GlobalComponents/ToggleHeart';
import { Link } from 'react-router-dom';

const Cards = ({ image, title, year, description }) => {
  return (
    <>
      <Section>
        <Image src={image} alt="film image" />
        <Data className="card_data">
          <H2 className="title">{title}</H2>
          <H3 className="year">{year}</H3>
          <P className="description" id="description">
            {description}
          </P>
          <Wrap>
            <Rate className="App">
              <ReactStars {...Stars} />
              <FavIcon />
            </Rate>
            <Link to="movie-details">Details</Link>
          </Wrap>
        </Data>
      </Section>
    </>
  );
};

export default Cards;
