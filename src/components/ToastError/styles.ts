import { MotiView } from 'moti';
import styled from 'styled-components/native';

export const Container = styled(MotiView)`
  position: absolute;
  z-index: 100;
  top: 15%;
  right: -500px;
  height: 130px;
  width: 290px;
  background-color: ${({ theme }) => theme.colors.feedback.negative};
  border-radius: 16px;
  padding: 12px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CloseButton = styled.TouchableOpacity`
  height: 32px;
  width: 32px;
`;
