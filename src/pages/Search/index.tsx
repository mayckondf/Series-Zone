/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { addError } from '@src/redux/reducers/error';
import { fetchFindShows } from '@src/services/shows';
import { Show, ShowResult } from '@src/types/app/Show';
import { generateError } from '@src/utils/error';
import { useDispatch } from 'react-redux';

import SearchView from './view';

const Search: React.FC = () => {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState<ShowResult[]>([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onItemPress = (show: Show) => {
    navigation.navigate('Show', { show });
  };

  useEffect(() => {
    if (search) {
      fetchFindShows({ search })
        .then(_result => setSearchResult(_result))
        .catch(error => dispatch(addError(generateError(error, true))));
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
