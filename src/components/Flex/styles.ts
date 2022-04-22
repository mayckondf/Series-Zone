import styled from 'styled-components/native';

import { FlexProps } from './types';

export const Container = styled.View<FlexProps>`
  flex: ${({ flex }) => flex || 1};
`;
