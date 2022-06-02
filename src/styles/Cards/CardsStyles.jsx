import styled from 'styled-components';
import { Colors, Fonts } from '../GlobalStyles/GlobalStyles';

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    border-radius: 2rem;
    border: none;
    background-color: ${Colors.LightGrey};
    margin: 4rem 1.6rem;
    height: auto;

    @media screen and (min-width: 478px) {
    margin: 8rem 3rem 2rem 3rem;
  }
`;

export const Image = styled.img`
    box-sizing: border-box;
    margin-left: -.25rem;
    border-radius: 2rem 0 0 2rem;
    width: 15%;
    object-fit: cover;
`;

export const Data = styled.div`
    display: grid;
    align-items: center;
    margin: .5rem;
`;

export const H2 = styled.h2`
    margin: .5rem;
    font: var(--Headline-4);
`;

export const H3 = styled.h3`
    margin: .5rem;
    margin-bottom: 1.5rem;
    font: var(--Headline-6);
`;

export const P = styled.p`
    margin: .5rem;
    margin-bottom: 2rem;
    max-width:100%;
    /* min-height: 55%; */
    font: var(--Headline-6);
`;

export const Rate = styled.div`
    margin: .5rem;
    display:flex;
    flex-direction: row;
`;

export const Toggle = styled.button`
    width: .3rem;
    height: 3%;
    border: none;
    background: none;
    cursor: pointer;
    margin-left: .5rem;

    svg{
        width: 4rem;
        height: 4rem;
    }
`

export const Wrap = styled.div`

`
