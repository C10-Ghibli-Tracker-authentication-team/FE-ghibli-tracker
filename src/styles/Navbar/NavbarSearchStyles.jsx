import styled from 'styled-components';
import { Fonts, Colors } from '../GlobalStyles/GlobalStyles';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  background: ${Colors.Secondary};
  padding: 0 0.8rem;

  @media screen and (min-width: 478px) {
    height: 6.5rem;
    padding: 0 1.6rem;
  }
`;

export const Input = styled.input`
  padding: 1.2rem;
  background-color: rgba(0, 0, 0, 0);
  color: ${Colors.Light};
  font: ${Fonts['Subtitle-2']};
  border: none;
  height: 100%;
  width: 100%;
  :focus-visible{
    outline: none;
  }
  ::placeholder {
    font: ${Fonts['Subtitle-1']};
    color: ${Colors.SilverChalice};
  }
  @media screen and (min-width: 478px) {
    font: ${Fonts['Subtitle-1']};
    width: 80%;
  }
`;

export const ContainerFilter = styled.div`
  height: 20rem;
  background: ${Colors.Secondary};
`;

export const RightIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  gap: 1.2rem;
  width: 100%;
  @media screen and (min-width: 478px) {
    width: auto;
  }
`;

export const ContainerMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.4rem;
`;

export const Section = styled.div`
  display: flex;
  justify-items: center;
  gap: .4rem;
  background-color: ${Colors.Secondary};
  border-radius: 1.5rem;
  margin: .8rem .4rem;
  @media screen and (min-width: 478px) {
    max-width: 45%;
    flex-wrap: wrap;
  }
`

export const Image = styled.img`
    box-sizing: border-box;
    width: 7%;
    object-fit: cover;
    border-radius: 1.5rem 0 0 1.5rem;
`;

export const MovieLink = styled(Link)`
    margin: .5rem;
    align-self: center;
    font: ${Fonts['Body-1']};
    color: ${Colors.Light};
    text-decoration:none;
    
`;