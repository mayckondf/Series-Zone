import { fonts } from '@src/theme/constants/fonts';
import { sizes } from '@src/theme/constants/sizes';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { CoreTextProps } from './types';

const fontStyles: { [index: string]: { size: number; font: string } } = {
  h1: { size: sizes.fontSizes.h1, font: fonts.Regular },
  h2: { size: sizes.fontSizes.h2, font: fonts.SemiBold },
  h3: { size: sizes.fontSizes.h3, font: fonts.Regular },
  h4: { size: sizes.fontSizes.h4, font: fonts.Regular },
  h5: { size: sizes.fontSizes.h5, font: fonts.Medium },
  h6: { size: sizes.fontSizes.h6, font: fonts.Medium },
  h7: { size: sizes.fontSizes.h7, font: fonts.SemiBold },
  h8: { size: sizes.fontSizes.h8, font: fonts.Medium },
  h9: { size: sizes.fontSizes.h9, font: fonts.Regular },
  b1: { size: sizes.fontSizes.b1, font: fonts.Regular },
  b2: { size: sizes.fontSizes.b2, font: fonts.SemiBold },
  b3: { size: sizes.fontSizes.b3, font: fonts.Medium },
  b4: { size: sizes.fontSizes.b4, font: fonts.Regular },
};

export const StyledText = styled(Text)<CoreTextProps>`
  font-size: ${({ fontStyle }) => fontStyles[fontStyle!].size}px;
  font-family: ${({ fontStyle }) => fontStyles[fontStyle!].font};
  color: ${({ theme, color }) => color || theme.colors.neutral._00};
`;
