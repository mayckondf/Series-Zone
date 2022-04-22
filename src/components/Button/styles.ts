import { MotiPressable } from 'moti/interactions';
import styled from 'styled-components/native';

export const Container = styled(MotiPressable)`
  height: 48px;
  width: 100%;
  justify-content: center;
`;

export const ButtonContent = styled.View<{ disabled: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.neutral._30 : theme.colors.accent};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex: 1;
`;
