import React from 'react';

import { useTheme } from 'styled-components';

import Text from '../Text';
import { Container, ButtonContent } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onPress,
  color,
  ...props
}) => {
  const { colors } = useTheme();

  return (
    <Container {...props} disabled={disabled} onPress={onPress}>
      <ButtonContent disabled={disabled} color={color}>
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
