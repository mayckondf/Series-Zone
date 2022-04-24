import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import styled from 'styled-components/native';

export const StyledFlatList = styled.FlatList.attrs<WithSafeArea>(
  ({ safeAreaInsets }) => ({
    contentContainerStyle: {
      paddingTop: safeAreaInsets.top || 24,
      paddingBottom: 24,
      flexGrow: 1,
    },
    columnWrapperStyle: {
      marginTop: 12,
    },
  }),
)<WithSafeArea>``;

export const Header = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 60px;
  flex-grow: 1;
`;

export const AnimationContainer = styled.View`
  width: 300px;
  height: 300px;
`;
