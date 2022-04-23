import React from 'react';

import { Text as RNText } from 'react-native';

import { StyledText } from './styles';
import { CoreTextProps } from './types';

const Text = React.forwardRef<RNText, CoreTextProps>(
  ({ fontStyle = 'b1', ...props }, ref) => {
    return <StyledText ref={ref} fontStyle={fontStyle} {...props} />;
  },
);

export default Text;
