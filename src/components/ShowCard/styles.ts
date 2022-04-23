import { LinearGradient } from 'expo-linear-gradient';
import { MotiPressable } from 'moti/interactions';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import Text from '../Text';

export const Container = styled(MotiPressable)`
  justify-content: center;
`;

export const CardContainer = styled.View`
  width: 150px;
  height: 225px;
  border-radius: 8px;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 12px;
  justify-content: center;
`;

export const Poster = styled(FastImage)`
  flex: 1;
`;

export const StyledName = styled(Text)`
  align-self: center;
  text-align: center;
  position: absolute;
  bottom: 4px;
  z-index: 3;
  padding: 0px 12px;
`;

export const GradientOverlay = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradients.g4,
}))`
  height: 35%;
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 0;
`;
