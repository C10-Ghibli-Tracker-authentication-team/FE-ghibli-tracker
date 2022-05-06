import styled from 'styled-components';
import { Colors, Fonts } from '../GlobalStyles/GlobalStyles';

const barWidth = (43/100)*100;

export const Container = styled.div`
  margin: 9.4rem 2.4rem 0 2.4rem;
  display: flex;
  flex-direction: column;
`;

export const Over = styled.span`
  font: ${Fonts.OVERLINE};
  color: ${Colors.Light};
`;

export const BarWrap = styled.div`
  margin: 0.8rem 0;
  padding: 0.8rem;
  width: 100%;
  height: 6.8rem;
  background-color: ${Colors.DavysGrey};
  border-radius: 1.5rem;
`;

export const Bar = styled.div`
  height: 100%;
  width: ${barWidth}%;
  border-radius: 1.5rem;
  background-color: ${Colors.Light};
`;

export const Progress = styled.span`
  font: ${Fonts['Subtitle-1']};
  color: ${Colors.Light};
  text-align: center;
`;
