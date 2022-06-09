import styled from 'styled-components';
import { Colors, Fonts } from '../../styles/GlobalStyles/GlobalStyles';

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
  background: var(--Secondary);
  padding: 0 0.8rem;

  @media screen and (min-width: 478px) {
    height: 6.5rem;
    padding: 0 1.6rem;
  }
`;

export const RightIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const ContainerFilter = styled.div`
  display: flex;
  flex-direction: column;
  height: 23rem;
  background: var(--Secondary);
  padding: 1rem 8%;
  @media screen and (min-width: 478px) {
    flex-direction: row;
    justify-content: space-around;
    height: 15rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.6rem 0;
  @media screen and (min-width: 478px) {
    width: 45%;
  }
`;

export const Label = styled.label`
  color: ${Colors.Light};
  font: ${Fonts.OVERLINE};
  margin-bottom: .8rem;
`;
