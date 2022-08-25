import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 478px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
    box-sizing: border-box;
    margin-left: -.25rem;
    border-radius: 2rem;
    margin-top: 5rem;
    width: 25%;
    object-fit: cover;
`;

export const Welcome = styled.p`
  position: absolute;
  width: 39.6rem;
  height: 11.6rem;
  font: var(--Headline-4);
  text-align: center;
  color: var(--Light);
  margin-top: 23rem;
`;

export const Join = styled.p`
  position: absolute;
  width: 39.6rem;
  height: 11.6rem;
  font: var(--Headline-5);
  text-align: center;
  color: var(--Light);
  margin-top: 40rem;
`;

export const LoginBtn = styled.button`
  width: 17.1rem;
  height: 4.8rem;
  margin: 35rem 0 3rem;
  border: none;
  border-radius: 1.5rem;
  background-color: var(--Orange);
  color: var(--White);
  font: var(--Subtitle-1);
  letter-spacing: 0.125em;
  cursor: pointer;
`;