/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { logout, updateUser } from '@src/redux/reducers/auth';
import { removeSecureValue } from '@src/services/secureStore';
import { useTranslation } from 'react-i18next';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import ProfileView from './view';

const Profile: React.FC = () => {
  const navigation = useNavigation();
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [viewedCount] = useState(0);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
    dispatch(logout());
  };

  const handleRemovePassCode = () => {
    dispatch(updateUser({ ...currentUser!, hasPassCode: false }));
    removeSecureValue({ key: currentUser?.id! });
  };

  const handleLockAccount = () => {
    if (currentUser?.hasPassCode) {
      Alert.alert(
        t('PROFILE.DISABLE_PASS_CODE.TITLE'),
        t('PROFILE.DISABLE_PASS_CODE.DESCRIPTION'),
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            style: 'destructive',
            onPress: handleRemovePassCode,
          },
        ],
      );
    } else {
      navigation.navigate('Lock', { createPassCode: true });
    }
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
      handleLockAccount={handleLockAccount}
    />
  );
};

export default Profile;
