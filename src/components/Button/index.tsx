import React, { useMemo } from 'react';

import { useTheme } from 'styled-components';

import Text from '../Text';
import { Container, ButtonContent } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  const { colors } = useTheme();

  return (
    <Container
      onPress={onPress}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet';
            return {
              scale: hovered || pressed ? 0.96 : 1,
            };
          },
        [],
      )}
    >
      <ButtonContent>
        {!!children && (
          <Text fontStyle="h5" color={colors.secondary}>
            {children}
          </Text>
        )}
      </ButtonContent>
    </Container>
  );
};

export default Button;
