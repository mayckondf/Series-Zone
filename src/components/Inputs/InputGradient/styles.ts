import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

import { KeyboardChangeProps } from './types';

export const StyledTextInput = styled(TextInput).attrs<KeyboardChangeProps>(
  ({ theme, isKeyboardVisible }) => ({
    placeholderTextColor: !isKeyboardVisible
      ? theme.colors.neutral._30
      : theme.colors.neutral._40,
    selectionColor: theme.colors.accent,
    keyboardAppearance: 'dark',
  }),
)<KeyboardChangeProps>`
  background-color: ${({ theme, isKeyboardVisible }) =>
    !isKeyboardVisible ? theme.colors.neutral._00 : theme.colors.secondary};
  color: ${({ theme, isKeyboardVisible }) =>
    !isKeyboardVisible ? theme.colors.secondary : theme.colors.neutral._00};
  flex: 1;
  border-radius: 8px;
  padding: 0px 12px;
`;

export const Container = styled(LinearGradient)<KeyboardChangeProps>`
  height: 54px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 2px;
`;
