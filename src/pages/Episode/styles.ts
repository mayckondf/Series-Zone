import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const StyledScrollView = styled.ScrollView.attrs<WithSafeArea>(
  ({ safeAreaInsets }) => ({
    contentContainerStyle: {
      paddingTop: safeAreaInsets.top,
      paddingBottom: safeAreaInsets.bottom,
      flexGrow: 1,
    },
  }),
)<WithSafeArea>``;

export const EpisodeImage = styled(FastImage)`
  width: 100%;
  height: 230px;
`;

export const ImageContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.accent};
`;

export const PaddingContent = styled.View`
  padding: 0px 12px;
`;

export const BackButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  border-radius: 24px;
`;
