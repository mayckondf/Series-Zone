import React, { useMemo } from 'react';

import {
  CardContainer,
  Container,
  GradientOverlay,
  Poster,
  StyledName,
} from './styles';
import { ShowCardProps } from './types';

const ShowCard: React.FC<ShowCardProps> = ({ onPress, show }) => {
  const { image, name } = show;

  return (
    <Container
      onPress={onPress}
      animate={useMemo(
        () =>
          ({ pressed }) => {
            'worklet';
            return {
              scale: pressed ? 0.9 : 1,
            };
          },
        [],
      )}
    >
      <CardContainer>
        <Poster source={{ uri: image.medium }} />
        <StyledName fontStyle="b1" numberOfLines={2}>
          {name}
        </StyledName>
        <GradientOverlay />
      </CardContainer>
    </Container>
  );
};

export default ShowCard;
