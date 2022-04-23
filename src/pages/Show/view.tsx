/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';

import Text from '@src/components/Text';
import { Episode } from '@src/types/app/Episode';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ListHeaderComponent from './components/ListHeaderComponent';
import {
  Container,
  EpisodeContainer,
  SectionContainer,
  StyledSectionList,
} from './styles';
import { ShowProps } from './types';

const ShowView: React.FC<ShowProps> = ({
  show,
  episodes,
  onPressEpisode,
  onPressFavorite,
  alreadyFavorite,
}) => {
  const insets = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item }: { item: Episode }) => (
      <EpisodeContainer onPress={() => onPressEpisode(item)}>
        <Text fontStyle="b1">{item.name}</Text>
      </EpisodeContainer>
    ),
    [onPressEpisode],
  );

  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: { title: string } }) => (
      <SectionContainer safeAreaInsets={insets}>
        <Text fontStyle="h4">{title}</Text>
      </SectionContainer>
    ),
    [],
  );

  return (
    <Container>
      <StyledSectionList<React.ElementType>
        sections={episodes}
        renderItem={renderItem}
        safeAreaInsets={insets}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={
          <ListHeaderComponent
            show={show}
            onPressFavorite={onPressFavorite}
            alreadyFavorite={alreadyFavorite}
          />
        }
      />
    </Container>
  );
};

export default ShowView;
