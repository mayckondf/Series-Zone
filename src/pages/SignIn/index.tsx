/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { login } from '@src/redux/reducers/auth';
import { User } from '@src/types/app/User';
import { useDispatch } from 'react-redux';

import SignInView from './view';

const SignIn: React.FC = () => {
  const { users, currentUser } = useAppSelector(state => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleUser = (user: User) => {
    dispatch(login(user));
  };

  const handleCreateUser = () => {
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    if (currentUser)
      navigation.reset({
        index: 1,
        routes: [{ name: 'Signed' }],
      });
  }, [currentUser]);

  return (
    <SignInView
      users={users}
      handleUser={handleUser}
      handleCreateUser={handleCreateUser}
    />
  );
};

export default SignIn;
