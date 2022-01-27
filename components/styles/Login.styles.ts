import { transparentize } from 'polished';
import styled from 'styled-components';

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TextInput = styled.input`
  border-width: 1px;
  background-color: ${(p) => p.theme.colors.neutrals[800]};
  color: ${(p) => p.theme.colors.neutrals[200]};
  border-color: ${(p) => p.theme.colors.neutrals[900]};
  font-size: 14px;
  border-radius: 6px;
  margin-bottom: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  font-family: inherit;
  transition: 0.2s ease-in-out;
  border-style: solid;
  resize: none;
  width: 100%;
  display: block;
  outline: 0;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary[500]};
  }
`;

export const FormButton = styled.button`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${(p) => p.theme.colors.primary[500]};
  border-color: ${(p) => p.theme.colors.primary[500]};
  color: ${(p) => p.theme.colors.neutrals['000']};
  text-decoration: none;
  overflow: hidden;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background-color: ${(p) => p.theme.colors.primary[600]};
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${(p) => transparentize(0.5, p.theme.colors.neutrals[800])};
  border: 1px solid;
  border-color: ${(p) => transparentize(0.75, p.theme.colors.neutrals[999])};
  border-radius: 24px 8px;
  flex: 1;
  min-height: 240px;
`;

export const Photo = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const SmallButton = styled.button`
  background-color: ${(p) => p.theme.colors.primary[500]};
  border-color: ${(p) => p.theme.colors.primary[600]};
  color: ${(p) => p.theme.colors.neutrals['000']};
  text-decoration: none;
  overflow: hidden;
  border-radius: 1000px;
  padding: 1px 8px;
  cursor: pointer;
  outline: 0;
  transition: 0.2s ease-in-out;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    color: ${(p) => p.theme.colors.neutrals['000']};
    background-color: ${(p) => p.theme.colors.primary[700]};
  }
`;

export const UserInfos = styled.div`
  margin-top: 8px;
  padding: 4px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 6px;
  color: ${(p) => p.theme.colors.neutrals[100]};
`;