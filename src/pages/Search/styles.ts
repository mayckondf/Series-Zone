import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import styled from 'styled-components/native';

export const StyledFlatList = styled.FlatList.attrs<WithSafeArea>(
  ({ safeAreaInsets }) => ({
    contentContainerStyle: {
      paddingTop: safeAreaInsets.top,
      paddingBottom: 24,
      paddingHorizontal: 12,
      flexGrow: 1,
    },
    columnWrapperStyle: {
      marginTop: 24,
    },
  }),
)<WithSafeArea>``;

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

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
