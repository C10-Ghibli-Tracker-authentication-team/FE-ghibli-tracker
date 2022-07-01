// import Star from "react-rating-stars-component/dist/star";
import {H2, ImageContainer, Img, P, Span} from '../styles/Movie/MovieStyles';

const Movie = (props) => {
  // { release_date, title, description, image, score }
  console.log('====================================');
  console.log(props);
  console.log('====================================');

  const imageUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg';
  return (
    <>
      <H2> Castle in the Sky (1986)</H2>
      {/* <Heart/> */}
      <ImageContainer>
        <Img src={imageUrl} alt="Movie cover" />
        <Span>Audience Score</Span>
        {/* <Star/> */}

        <Span>Your Score</Span>
        {/* <Star/> */}
      </ImageContainer>
      <P>
      The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.
      </P>
    </>
  )
}

export default Movie;
