import { theme } from '@src/theme';
import { TextProps } from 'react-native';

export type FontStyle = keyof typeof theme.sizes.fontSizes;

export interface CoreTextProps extends TextProps {
  color?: string;
  fontStyle: FontStyle;
  marginBottom?: number;
  marginTop?: number;
}
