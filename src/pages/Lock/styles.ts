import Text from '@src/components/Text';
import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  flex: 1;
`;

export const KeyboardWrapper = styled.View``;

export const KeyboardLine = styled.View`
  flex-direction: row;
`;

export const KeyboardButton = styled.Pressable`
  width: 72px;
  height: 72px;
  margin: 16px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.neutral._30};
  border-radius: 36px;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const Number = styled(Text)<{ pressed: boolean }>`
  color: ${({ pressed, theme }) =>
    pressed ? theme.colors.neutral._40 : theme.colors.neutral._00};
`;

export const WhiteSpace = styled.TouchableOpacity`
  width: 72px;
  height: 72px;
  margin: 16px;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`;

export const DigitsWrapper = styled.View`
  flex-direction: row;
`;

export const Digit = styled.View<{ done: boolean }>`
  width: 12px;
  height: 12px;
  margin: 8px;
  border-radius: 6px;
  background: ${({ theme, done }) =>
    done ? theme.colors.accent : theme.colors.neutral._40};
`;

export const BackButton = styled.TouchableOpacity<WithSafeArea>`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  position: absolute;
  left: 12px;
  top: ${({ safeAreaInsets }) => safeAreaInsets.top}px;
  justify-content: center;
  align-items: center;
`;
