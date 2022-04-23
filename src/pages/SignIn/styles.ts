import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const UserCard = styled.TouchableOpacity<{ marginRight: boolean }>`
  max-height: 180px;
  height: 180px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral._40};
  margin-right: ${({ marginRight }) => (marginRight ? 12 : 0)}px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const StyledFlatList = styled.FlatList.attrs<WithSafeArea>(
  ({ safeAreaInsets }) => ({
    contentContainerStyle: {
      paddingTop: safeAreaInsets.top,
      paddingBottom: safeAreaInsets.bottom,
      flexGrow: 1,
      flex: 1,
    },
    numColumns: 2,
  }),
)<WithSafeArea>`
  flex: 1;
`;

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradients.g1,
}))<WithSafeArea>`
  flex: 1;
  justify-content: center;
  padding: 0px 12px;
  padding-bottom: ${({ safeAreaInsets }) => safeAreaInsets.bottom}px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;
