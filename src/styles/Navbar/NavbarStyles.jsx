import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  background: var(--Secondary);
  padding: 0 0.8rem;

  @media screen and (min-width: 478px) {
    height: 6.5rem;
    padding: 0 1.6rem;
  }
`;
export const Link = styled.a`
  width: 3rem;
`;
export const UserIcon = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
export const SearchIcon = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin: 0 1rem 0 0;
`;
