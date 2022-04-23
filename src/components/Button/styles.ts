import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { BackgroundSelector, ContainerProps } from './types';

const getBackgroundColor = ({ disabled, color, theme }: BackgroundSelector) => {
  if (disabled) return theme.colors.neutral._30;
  return color ? color : theme.colors.accent;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  height: 48px;
  width: 100%;
  justify-content: center;
  margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
`;

export const ButtonContent = styled.View<ContainerProps>`
  background-color: ${props => getBackgroundColor(props)};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex: 1;
`;
