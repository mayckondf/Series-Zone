import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { fetchShows } from '@src/services/shows';
import { Show } from '@src/types/app/Show';

import HomeView from './view';

const Home: React.FC = () => {
  const { shows } = useAppSelector(state => state.shows);
  const navigation = useNavigation();

  const loadMoreShows = () => {
    fetchShows();
  };

  useEffect(() => {
    if (!shows.length) fetchShows();
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
