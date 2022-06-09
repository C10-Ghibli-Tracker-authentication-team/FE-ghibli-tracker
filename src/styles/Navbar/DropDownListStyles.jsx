import styled from 'styled-components';
import { Colors, Fonts } from '../../styles/GlobalStyles/GlobalStyles';

export const SelectContainer = styled.div`
    position: relative;
`;

export const Select = styled.select`
  appearance: none;
  width: 100%;
  cursor: pointer;
  border-radius: 15px;
  height: 5rem;
  padding: 0.8rem 2.4rem;
  outline: none;
  border: none;
  background: ${Colors.LightGrey};
  font: ${Fonts['Subtitle-1']};
  color: ${Colors.Secondary};
  position: relative;
  transition: all 1.25s ease;
  ::-ms-expand {
    display: none;
  }
  @media screen and (min-width: 478px) {
    width: 100%;
  }
`;

export const I = styled.i`
  position: absolute;
  right: 20px;
  top: calc(50% - 1rem);
  width: 1.6rem;
  height: 1.6rem;
  display: block;
  border-left: 0.4rem solid ${Colors.Secondary};
  border-bottom: 0.4rem solid ${Colors.Secondary};
  transform: rotate(-45deg);
  transition: all 0.25s ease;
`;
