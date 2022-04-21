import React from 'react';

import { svgs } from '@src/assets/svgs';
import { useTheme } from 'styled-components';

import { ICON_SIZES } from './styles';
import { IconProps } from './types';

const Icon: React.FC<IconProps> = ({ variant, size, color, ...props }) => {
  const Component = svgs[variant];
  const { colors } = useTheme();

  return (
    <Component
      color={color || colors.neutral._00}
      width={ICON_SIZES[size]}
      height={ICON_SIZES[size]}
      {...props}
    />
  );
};

export default Icon;
