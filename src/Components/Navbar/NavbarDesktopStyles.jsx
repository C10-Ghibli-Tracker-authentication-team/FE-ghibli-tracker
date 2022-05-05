import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 6.5rem;
    background: var(--Secondary);
`
export const User = styled.a`
    width: 6rem;
    height: 100%;
`
export const UserIcon = styled.img`
    max-height: 60%;
    max-width: 80%;
    border-radius: 0;
    margin: 1.5rem 0 0 1rem;
`

export const Search = styled.a`
    width: 6rem;
    height: 100%;
`
export const SearchIcon = styled.img`
    max-height: 60%;
    max-width: 80%;
    border-radius: 0;
    margin: 1.5rem 1rem 0 0;
`