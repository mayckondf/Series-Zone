import React from 'react';

import { Container } from './styles';
import { FlexProps } from './types';

const Flex: React.FC<FlexProps> = props => {
  return <Container {...props} />;
};

export default Flex;
