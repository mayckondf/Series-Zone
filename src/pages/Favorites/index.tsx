/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { Show } from '@src/types/app/Show';

import FavoritesView from './view';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Show[]>([]);
  const navigation = useNavigation();
  const {
    auth: { currentUser },
    favorites: { userFavorites },
  } = useAppSelector(state => state);

  const onItemPress = (show: Show) => {
    navigation.navigate('Show', { show });
  };

  useEffect(() => {
    if (userFavorites[currentUser?.id!]) {
      setFavorites(userFavorites[currentUser?.id!]);
    }
  }, [userFavorites[currentUser?.id!]]);

  return <FavoritesView favorites={favorites} onItemPress={onItemPress} />;
};

export default Favorites;
