import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs<WithSafeArea>(
  ({ safeAreaInsets }) => ({
    contentContainerStyle: {
      paddingTop: safeAreaInsets.top,
      paddingHorizontal: 12,
      flexGrow: 1,
      paddingBottom: 20,
    },
  }),
)<WithSafeArea>``;

export const UserInfo = styled.View`
  flex: 1;
`;

export const ButtonLockAccount = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const HorizontalRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  height: 72px;
  width: 72px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const InfoContainer = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 24px;
`;

export const Info = styled.View<{ hasMargin?: boolean }>`
  min-width: 35%;
  flex: 1;
  height: 115px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-right: ${({ hasMargin }) => (hasMargin ? 12 : 0)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
