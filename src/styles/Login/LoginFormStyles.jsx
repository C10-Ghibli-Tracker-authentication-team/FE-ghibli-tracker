import styled from 'styled-components';
import { Link } from "react-router-dom";

export const FormInner = styled.form`

    @media screen and (min-width: 478px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
    position: absolute;
    width: 39.6rem;
    height: 11.6rem;
    font: var(--Headline-3);
    text-align: center;
    color: var(--Light);
    margin-top: 8rem;
`;

export const Subtitle = styled.h2`
    position: absolute;
    width: 39.6rem;
    height: 11.6rem;
    font: var(--Headline-4);
    text-align: center;
    color: var(--Light);
    margin-top: 22rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    :first-of-type {
        margin-top: 30.6rem;
    }
    :not(:last-of-type) {
        margin-bottom: 1.5rem;
    }

    label {
    font: var(--Headline-6);
    line-height: 1.7rem;
    letter-spacing: 0.15em;
    color: var(--Light);
    align-self: start;
    margin-left: 1.2rem;
}

    input {
    height: 5rem;
    width: 34.2rem;
    margin-top: 1.2rem;
    border-radius: 1.6rem;
    border: none;
    background: #D4D4D4;
    padding-left: 4rem;

}

    img {
    width: 1.8rem;
    height: 1.9rem;
    margin-top: -3.5rem;
    margin-left: 1.5rem;
}

`;

export const LoginBtn = styled.button`
    width: 17.1rem;
    height: 4.8rem;
    margin-top: 4.6rem;
    border: none;
    border-radius: 1.5rem;
    background-color: var(--Orange);
    color: var(--White);
    font: var(--Subtitle-1);
    letter-spacing: 0.125em;
    cursor: pointer;
`;

export const Redirect = styled.div`
    font: var(--Subtitle-1);
    width: 17.1rem;
    display: flex;
    justify-content: center;
    margin-top: 4.6rem;
`;
export const RedirectLabel = styled.span`
    color: var(--White);
`;

export const RedirectLink = styled(Link)`
    color: var(--Light);
    &:hover {
    text-decoration: underline;
  }
`;

export const Twitter = styled.input.attrs({ 
    type: 'submit'
  }) `
    width: 34.2rem;
    height: 5rem;
    margin-top: 9.6rem;
    margin-bottom: 3.2rem;
    background: #1DA1F2;
    border-radius: 1.6rem;
    border: none;

    font: var(--Subtitle-1);
    line-height: 2rem;
    letter-spacing: 0.015em;

    color: var(--White);
    cursor: pointer;
`

export const TwitterLogo = styled.img`
    height: 3.6rem;
    width: 3.6rem;
    margin-right: 27rem;
    margin-top: -7.5rem;
`;

export const Facebook = styled.input.attrs({ 
    type: 'submit'
  }) `
    width: 34.2rem;
    height: 5rem;
    margin-top: 3.2rem;
    margin-bottom: 4rem;
    background: #4267B2;
    border-radius: 1.6rem;
    border: none;

    font: var(--Subtitle-1);
    line-height: 2rem;
    letter-spacing: 0.015em;

    color: var(--White);
    cursor: pointer;
`;

export const FacebookLogo = styled.img `
    height: 3.6rem;
    width: 3.6rem;
    margin-right: 27rem;
    margin-top: -8.3rem;
`;