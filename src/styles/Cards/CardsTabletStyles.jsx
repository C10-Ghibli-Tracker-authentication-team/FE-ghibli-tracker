import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    border-radius: 2rem;
    margin: 8rem 3rem 2rem 3rem;
    border: none;
    background:  #D4D4D4;
`;

export const Image = styled.img`
    box-sizing: border-box;
    margin-left: -.25rem;
    border-radius: 2rem 0 0 2rem;
    width: 30%;
    height: inherit;
    object-fit: cover;
`;

export const Data = styled.div`
    margin: .5rem;
`;

export const H2 = styled.h2`
    margin: .5rem;
    font-size: 3rem;
`;

export const H3 = styled.h3`
    margin: .5rem;
    margin-bottom: 1.5rem;
    font-size: 2rem;
`;

export const P = styled.p`
    margin: .5rem;
    margin-bottom: 2rem;
    max-width:100%;
    min-height: 55%;
    font-size: 2rem;
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
        width: 3rem;
        height: 3rem;
    }
`

