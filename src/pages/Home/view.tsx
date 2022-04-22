import React, { memo } from 'react';

import Flex from '@src/components/Flex';
import ShowCard from '@src/components/ShowCard';
import TabPageContainer from '@src/components/TabPageContainer';
import Text from '@src/components/Text';
import { Show } from '@src/types/app/Show';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import { Footer, Header, StyledFlatList } from './styles';
import { HomeViewProps } from './types';

const HomeView: React.FC<HomeViewProps> = ({
  shows,
  loadMoreShows,
  onItemPress,
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TabPageContainer>
      <StyledFlatList<React.ElementType>
        data={shows}
        numColumns={2}
        keyExtractor={(item: Show) => item.id}
        onEndReached={loadMoreShows}
        renderItem={({ item, index }: { item: Show; index: number }) => (
          <>
            {index % 2 === 0 && <Flex />}
            <ShowCard show={item} onPress={() => onItemPress(item)} />
            <Flex />
          </>
        )}
        ListHeaderComponent={() => (
          <Header>
            <Text fontStyle="h1" color={colors.accent}>
              {t('HOME.TITLE')}
            </Text>
          </Header>
        )}
        ListFooterComponent={() => (
          <Footer>
            <ActivityIndicator size="large" color={colors.accent} />
          </Footer>
        )}
        safeAreaInsets={insets}
      />
    </TabPageContainer>
  );
};

export default memo(HomeView);
