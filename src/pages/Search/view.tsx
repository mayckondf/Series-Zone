import React, { useCallback } from 'react';

import Flex from '@src/components/Flex';
import ShowCard from '@src/components/ShowCard';
import TabPageContainer from '@src/components/TabPageContainer';
import Text from '@src/components/Text';
import { ShowResult } from '@src/types/app/Show';
import LottieView from 'lottie-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import SearchHeader from './components/SearchHeader';
import { AnimationContainer, CenterView, StyledFlatList } from './styles';
import { SearchProps } from './types';

const SearchView: React.FC<SearchProps> = ({
  searchState,
  searchResult,
  onItemPress,
}) => {
  const insets = useSafeAreaInsets();

  const renderItem = useCallback(
    ({ item, index }: { item: ShowResult; index: number }) => {
      return (
        <>
          <ShowCard show={item.show} onPress={() => onItemPress(item.show)} />
          {index % 2 === 0 && <Flex />}
        </>
      );
    },
    [onItemPress],
  );

  return (
    <TabPageContainer>
      <StyledFlatList<React.ElementType>
        data={searchResult}
        numColumns={2}
        safeAreaInsets={insets}
        renderItem={renderItem}
        ListHeaderComponent={<SearchHeader searchState={searchState} />}
        ListEmptyComponent={
          <CenterView>
            <Text fontStyle="h2" style={{ textAlign: 'center' }}>
              Search for your favorite series
            </Text>
            <AnimationContainer>
              <LottieView
                source={require('../../assets/animations/search.json')}
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

export default SearchView;
