import styled, { css } from 'styled-components/native';

import { LanguageSelectorContainerProps } from './types';

export const Container = styled.TouchableOpacity<LanguageSelectorContainerProps>`
  ${({ absolute, safeAreaInsets }) =>
    absolute &&
    css`
      position: absolute;
      top: ${() => safeAreaInsets?.top}px;
      right: 12px;
      z-index: 10;
    `}

  width: 32px;
  height: 64px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.colors.neutral._00};
  justify-content: center;
  align-items: center;
`;
