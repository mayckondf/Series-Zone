/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { logout } from '@src/redux/reducers/auth';
import { useDispatch } from 'react-redux';

import ProfileView from './view';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [viewedCount] = useState(0);
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
    dispatch(logout());
  };

  const {
    auth: { currentUser },
    favorites: { userFavorites },
  } = useAppSelector(state => state);

  useEffect(() => {
    if (userFavorites[currentUser?.id!]) {
      setFavoritesCount(userFavorites[currentUser?.id!].length);
    }
  }, [userFavorites[currentUser?.id!]]);

  return (
    <ProfileView
      currentUser={currentUser!}
      handleLogout={handleLogout}
      favoritesCount={favoritesCount}
      viewedCount={viewedCount}
    />
  );
};

export default Profile;
