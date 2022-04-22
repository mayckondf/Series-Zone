import Text from '@src/components/Text';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  justify-content: center;
  margin: 0 16px;
`;

export const CenterView = styled.View`
  width: 100%;
  align-items: center;
`;

export const AppNameContainer = styled.View`
  margin-top: 8px;
  align-items: center;
`;

export const AnimatedBackground = styled(MotiView)`
  flex: 1;
`;

export const Title = styled(Text)`
  align-self: center;
`;

export const Subtitle = styled(Text)`
  margin-top: 24px;
  text-align: center;
`;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradients.g1,
}))`
  flex: 1;
`;
