/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { addError } from '@src/redux/reducers/error';
import { fetchShows } from '@src/services/shows';
import { Show } from '@src/types/app/Show';
import { generateError } from '@src/utils/error';
import { useDispatch } from 'react-redux';

import HomeView from './view';

const Home: React.FC = () => {
  const { shows } = useAppSelector(state => state.shows);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loadMoreShows = () => {
    fetchShows();
  };

  useEffect(() => {
    if (!shows.length)
      fetchShows().catch(error =>
        dispatch(addError(generateError(error, true))),
      );
  }, [shows]);

  const onItemPress = (show: Show) => {
    navigation.navigate('Show', { show });
  };

  return (
    <HomeView
      shows={shows}
      loadMoreShows={loadMoreShows}
      onItemPress={onItemPress}
    />
  );
};

export default Home;
