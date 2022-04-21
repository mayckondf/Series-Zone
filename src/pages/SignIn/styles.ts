import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  ...theme.colors.gradients.g1,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
