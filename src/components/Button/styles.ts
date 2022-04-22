import { MotiPressable } from 'moti/interactions';
import styled from 'styled-components/native';

export const Container = styled(MotiPressable)`
  height: 48px;
  width: 100%;
  justify-content: center;
`;

export const ButtonContent = styled.View`
  background-color: ${({ theme }) => theme.colors.accent};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex: 1;
`;
