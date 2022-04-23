import React from 'react';

import Button from '@src/components/Button';
import Text from '@src/components/Text';
import { removeTagsFromText } from '@src/utils/text';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import {
  BackgroundImage,
  Content,
  GradientOverlay,
  HeaderContent,
  ImageContainer,
} from '../styles';
import { ListHeaderProps } from '../types';

const ListHeaderComponent: React.FC<ListHeaderProps> = ({
  show,
  onPressFavorite,
  alreadyFavorite,
}) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const getDateAndTimes = () => {
    if (show.status !== 'Running') {
      return t('SHOW.STATUS.NOT_RUNNING');
    }
    return (
      t('SHOW.STATUS.RUNNING', { time: show.schedule.time }) +
      show.schedule.days.join(', ')
    );
  };

  return (
    <HeaderContent>
      <ImageContainer>
        <BackgroundImage source={{ uri: show.image.original }} />
        <GradientOverlay />
      </ImageContainer>
      <Content>
        <Button
          onPress={onPressFavorite}
          marginBottom={24}
          color={alreadyFavorite ? colors.feedback.negative : colors.accent}
        >
          {alreadyFavorite
            ? t('SHOW.FAVORITE_BUTTON.REMOVE')
            : t('SHOW.FAVORITE_BUTTON.ADD')}
        </Button>
        <Text fontStyle="h2" marginBottom={12}>
          {show.name}
        </Text>
        <Text fontStyle="b1" color={colors.smooth} marginBottom={24}>
          {removeTagsFromText(show.summary)}
        </Text>
        <Text fontStyle="b3">
          {t('SHOW.GENRES') + show.genres.filter(genre => genre).join(',')}
        </Text>
        <Text fontStyle="b3">{getDateAndTimes()}</Text>
      </Content>
    </HeaderContent>
  );
};

export default ListHeaderComponent;
