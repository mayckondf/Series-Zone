import React, { useCallback } from 'react';

import Flex from '@src/components/Flex';
import ShowCard from '@src/components/ShowCard';
import TabPageContainer from '@src/components/TabPageContainer';
import Text from '@src/components/Text';
import { Show } from '@src/types/app/Show';
import LottieView from 'lottie-react-native';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import {
  AnimationContainer,
  CenterView,
  Header,
  StyledFlatList,
} from './styles';
import { FavoritesViewProps } from './types';

const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  onItemPress,
}) => {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item, index }: { item: Show; index: number }) => {
      return (
        <>
          {index % 2 === 0 && <Flex />}
          <ShowCard show={item} onPress={() => onItemPress(item)} />
          <Flex />
        </>
      );
    },
    [onItemPress],
  );

  return (
    <TabPageContainer>
      <StyledFlatList<React.ElementType>
        data={favorites}
        numColumns={2}
        keyExtractor={(item: Show) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <Header>
            <Text fontStyle="h1" color={colors.neutral._20}>
              {t('FAVORITES.TITLE')}
            </Text>
          </Header>
        )}
        safeAreaInsets={insets}
        ListEmptyComponent={
          <CenterView>
            <Text fontStyle="h2" textAlign="center" marginBottom={24}>
              {t('FAVORITES.EMPTY_DESCRIPTION')}
            </Text>
            <AnimationContainer>
              <LottieView
                source={require('../../assets/animations/favorite.json')}
                autoPlay
                loop
              />
            </AnimationContainer>
          </CenterView>
        }
      />
    </TabPageContainer>
  );
};

export default FavoritesView;
