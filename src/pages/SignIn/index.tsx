import React from 'react';

import Icon from '@src/components/Icon';
import Text from '@src/components/Text';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Icon variant="logo" size="xxl" />
      <Text fontStyle="h1">Series Zone</Text>
    </Container>
  );
};

export default SignIn;
