import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { fetchFindShows } from '@src/services/shows';
import { Show, ShowResult } from '@src/types/app/Show';

import SearchView from './view';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<ShowResult[]>([]);
  const navigation = useNavigation();

  const onItemPress = (show: Show) => {
    navigation.navigate('Show', { show });
  };

  useEffect(() => {
    if (search) {
      fetchFindShows({ search }).then(_result => setSearchResult(_result));
    } else {
      setSearchResult([]);
    }
  }, [search]);

  console.tron.log(searchResult);

  return (
    <SearchView
      searchState={[search, setSearch]}
      searchResult={searchResult}
      onItemPress={onItemPress}
    />
  );
};

export default Search;
