import { PressableProps } from 'react-native';

type PurePressable = Omit<PressableProps, 'children'>;

export interface ButtonProps {
  onPress: () => void;
  disabled?: boolean;
}
