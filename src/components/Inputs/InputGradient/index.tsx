import React from 'react';

import useKeyboard from '@src/hooks/useKeyboard';
import { TextInput } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, StyledTextInput } from './styles';
import { GradienteInputProps } from './types';

const InputGradient = React.forwardRef<TextInput, GradienteInputProps>(
  ({ ...props }, ref) => {
    const { colors } = useTheme();
    const [isKeyboardVisible] = useKeyboard({
      useWillHide: true,
      useWillShow: true,
    });

    return (
      <Container
        {...(!isKeyboardVisible ? colors.gradients.g2 : colors.gradients.g3)}
        isKeyboardVisible={isKeyboardVisible}
      >
        <StyledTextInput
          {...props}
          ref={ref}
          isKeyboardVisible={isKeyboardVisible}
        />
      </Container>
    );
  },
);

export { InputGradient };
