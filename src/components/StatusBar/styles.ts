import styled from 'styled-components/native';

export const StyledStatusBar = styled.StatusBar.attrs<{ dark?: boolean }>(
  props => ({
    backgroundColor: 'transparent',
    barStyle: props.dark ? 'dark-content' : 'light-content',
  }),
)<{ dark?: boolean }>``;
