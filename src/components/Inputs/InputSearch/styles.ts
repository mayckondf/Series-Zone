import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.neutral._70};
  height: 58px;
  width: 100%;
  border-radius: 8px;
`;

export const StyledTextInput = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.neutral._40,
  selectionColor: theme.colors.accent,
  keyboardAppearance: 'dark',
}))`
  flex: 1;
  color: ${({ theme }) => theme.colors.neutral._00};
  font-family: ${({ theme }) => theme.fonts.Medium};
  padding: 0px 12px;
`;
