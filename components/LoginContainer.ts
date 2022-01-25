import styled from 'styled-components';
import { transparentize } from 'polished';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 700px;
  border-radius: 32px 8px;
  padding: 32px;
  margin: 16px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: ${(p) =>
    transparentize(0.06, p.theme.colors.neutrals[700])};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
