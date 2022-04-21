import { svgs } from '@src/assets/svgs';
import { Color, SvgProps } from 'react-native-svg';

import { ICON_SIZES } from './styles';

export type IconVariant = keyof typeof svgs;

export type IconSize = keyof typeof ICON_SIZES;

export interface IconProps extends SvgProps {
  variant: IconVariant;
  size: IconSize;
  color?: Color;
}
