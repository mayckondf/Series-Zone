import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const ShadowEffect = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 1,
    height: 5,
  },
  shadowOpacity: 0.64,
  shadowRadius: 8.27,
  elevation: 10,
})`
  background: black;
  width: 100%;
  height: 50px;
  position: absolute;
  bottom: -50px;
`;
