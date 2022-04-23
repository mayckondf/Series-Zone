import { WithSafeArea } from '@src/types/app/SafeAreaElement';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const SectionContainer = styled.View<WithSafeArea>`
  padding: ${({ safeAreaInsets }) => safeAreaInsets.top}px 12px;
  padding-bottom: 12px;
  justify-content: center;
  background: ${({ theme }) => theme.colors.accent};
  align-items: center;
`;

export const EpisodeContainer = styled.TouchableOpacity`
  height: 48px;
  justify-content: center;
  padding: 0 24px;
  border-bottom-width: ${() => StyleSheet.hairlineWidth}px;
  border-bottom-color: ${({ theme }) => theme.colors.accent};
`;

export const HeaderContent = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ImageContainer = styled.View`
  height: 500px;
  width: 100%;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
`;

export const Content = styled.View`
  padding: 0px 12px;
  padding-bottom: 12px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.neutral._99};
`;

export const Line = styled.View`
  height: 4px;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: 2px;
  margin: 12px 0px;
`;

export const GradientOverlay = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradients.g5,
}))`
  height: 35%;
  width: 100%;
  position: absolute;
  z-index: 3;
  bottom: 0;
`;

export const StyledSectionList = styled.SectionList.attrs<WithSafeArea>(
  ({ safeAreaInsets }) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: safeAreaInsets.bottom,
    },
    bounces: false,
  }),
)<{ safeAreaInsets: EdgeInsets }>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
`;
