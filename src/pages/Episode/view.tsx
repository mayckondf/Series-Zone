import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Icon from '@src/components/Icon';
import Text from '@src/components/Text';
import { removeTagsFromText } from '@src/utils/text';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import { EpisodeProps } from './styled';
import {
  BackButton,
  Container,
  EpisodeImage,
  ImageContainer,
  PaddingContent,
  StyledScrollView,
} from './styles';

const EpisodeView: React.FC<EpisodeProps> = ({ episode }) => {
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Container>
      <StyledScrollView safeAreaInsets={insets}>
        <PaddingContent>
          <BackButton onPress={navigation.goBack}>
            <Icon variant="arrowLeft" size="sm" color={colors.secondary} />
          </BackButton>
          <Text fontStyle="h2" marginBottom={24}>
            {episode.name}
          </Text>
          <Text fontStyle="h4" marginBottom={24}>
            {removeTagsFromText(episode.summary)}
          </Text>
          <Text fontStyle="b2">
            {t('EPISODE.SEASON', { number: episode.season })}
          </Text>
          <Text fontStyle="b2" marginBottom={24}>
            {t('EPISODE.NUMBER', { number: episode.number })}
          </Text>
        </PaddingContent>
        {!!episode?.image?.original && (
          <ImageContainer>
            <EpisodeImage source={{ uri: episode?.image?.original }} />
          </ImageContainer>
        )}
      </StyledScrollView>
    </Container>
  );
};

export default EpisodeView;
