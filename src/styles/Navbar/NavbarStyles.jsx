import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.5rem;
  background: var(--Secondary);
  padding: 0 0.8rem;

  @media screen and (min-width: 478px) {
    height: 6.5rem;
    padding: 0 1.6rem;
    width:100%;
  }
`;