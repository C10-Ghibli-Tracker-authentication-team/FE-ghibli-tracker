import styled from 'styled-components';
import DropDownList from '../../components/NavbarComponents/DropDownList';

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

export const ContainerFilter = styled.div`
  height: 20rem;
  background: var(--Secondary);
`;

export const RightIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
`;

export const List = styled(DropDownList)`
  width: 30%;
  appearance: none;
  border-radius: 15px;
  height: 5rem;
  padding: 0 1.2rem;
  background: url('./selectStyle.svg') 96% / 15% no-repeat #94d1bd;
`;
