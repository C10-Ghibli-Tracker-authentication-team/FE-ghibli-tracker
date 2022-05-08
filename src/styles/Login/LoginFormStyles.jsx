import styled from 'styled-components';

export const FormInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    position: absolute;
    width: 39.6rem;
    height: 11.6rem;
    font-size: 4.8rem;
    text-align: center;
    color: var(--Light);
    margin-top: 8rem;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30.6rem;

    label {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
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

export const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.2rem;

    label {
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
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

export const LoginBtn = styled.input `
    width: 17.1rem;
    height: 4.8rem;
    margin-top: 4.6rem;
    border: none;
    border-radius: 1.5rem;
    background-color: var(--Orange);
    color: var(--Secondary);
    font-weight: 800;
    font-size: 1.4rem;
    letter-spacing: 0.125em;
`;

export const Twitter = styled.input `
    width: 34.2rem;
    height: 5rem;
    margin-top: 9.6rem;
    margin-bottom: 3.2rem;
    background: #1DA1F2;
    border-radius: 1.6rem;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 0.015em;

    color: #FFFFFF;
`

export const TwitterLogo = styled.img `
    height: 3.6rem;
    width: 3.6rem;
    margin-right: 27rem;
    margin-top: -7.5rem;
`;

export const Facebook = styled.input `
    width: 34.2rem;
    height: 5rem;
    margin-top: 3.2rem;
    background: #4267B2;
    border-radius: 1.6rem;
    border: none;

    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 0.015em;

    color: #FFFFFF;
`;

export const FacebookLogo = styled.img `
    height: 3.6rem;
    width: 3.6rem;
    margin-right: 27rem;
    margin-top: -4.3rem;
`;