import React from 'react';

import Logo from '@src/assets/svgs/logo.svg';
import Text from '@src/components/Text';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo />
      <Text fontStyle="h1">Series Zone</Text>
    </Container>
  );
};

export default SignIn;
