import { PressableProps } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

type PurePressable = Omit<PressableProps, 'children'>;

export type ContainerProps = {
  marginBottom?: number;
  marginTop?: number;
  disabled?: boolean;
  color?: string;
};

export interface BackgroundSelector extends ContainerProps {
  theme: DefaultTheme;
}
export interface ButtonProps extends ContainerProps {
  onPress: () => void;
}
