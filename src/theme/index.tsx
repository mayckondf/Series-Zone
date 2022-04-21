import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import { colors } from './constants/colors';
import { fonts } from './constants/fonts';
import { sizes } from './constants/sizes';

export const theme = {
  colors,
  fonts,
  sizes,
} as const;

const Theme: React.FC = props => {
  return <ThemeProvider theme={theme} {...props} />;
};

export default Theme;
