import styled from 'styled-components';

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const UserName = styled.p`
  font: var(--Headline-4);
  letter-spacing: 0.25rem;
  color: var(--Light);
  text-align: center;
`;

export const UserLinks = styled.div`
  margin: 9.4rem 0 0 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const A = styled.a`
  text-decoration: none;
  color: var(--Light);
  font: var(--Headline-5);
`;
