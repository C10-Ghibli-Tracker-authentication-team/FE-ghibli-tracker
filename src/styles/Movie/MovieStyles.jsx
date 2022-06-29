import styled from "styled-components";
import { Fonts, Colors } from "../GlobalStyles/GlobalStyles";

export const H2 = styled.h2`
  color: ${Colors.Light};
  font: ${Fonts["Headline-3"]};
  margin: 3.2rem 0 0 2rem;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 2.4rem auto;
`

export const Img = styled.img`
  aspect-ratio: 1/1;
  max-width: 100%;
  object-fit: cover;
  object-position:top;
  border-radius: 1.4rem;
`

export const P = styled.p`
  color: ${Colors.White};
  font: ${Fonts["Headline-6"]};
  text-align: justify;
  max-width: 50rem;
  margin: 0 auto;
`
export const Span = styled.span`
  color: ${Colors.Light};
  font: ${Fonts["Subtitle-2"]};
  margin: 1.4rem 0;
`