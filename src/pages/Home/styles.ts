import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const StyledFlatList = styled.FlatList.attrs<{
  safeAreaInsets: EdgeInsets;
}>(({ safeAreaInsets }) => ({
  contentContainerStyle: {
    paddingTop: safeAreaInsets.top || 20,
  },
  columnWrapperStyle: {
    marginTop: 12,
  },
}))<{
  safeAreaInsets: EdgeInsets;
}>``;
