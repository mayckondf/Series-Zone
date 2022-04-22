import React from 'react';

import { Container, ShadowEffect } from './styles';

const TabPageContainer: React.FC = ({ children, ...props }) => {
  return (
    <Container {...props}>
      {children}
      <ShadowEffect />
    </Container>
  );
};

export default TabPageContainer;
