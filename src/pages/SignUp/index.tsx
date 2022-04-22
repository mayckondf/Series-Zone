/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { registerUser } from '@src/redux/reducers/auth';
import { NICKNAME_MIN_LENGTH } from '@src/utils/constants';
import { useDispatch } from 'react-redux';

import SignUpView from './view';

const SignUp: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [validated, setValidated] = useState(false);
  const { currentUser } = useAppSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleContinue = () => {
    if (validated) {
      dispatch(registerUser({ nickname }));
    }
  };

  useEffect(() => {
    if (nickname.length >= NICKNAME_MIN_LENGTH) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [nickname]);

  useEffect(() => {
    if (currentUser) navigation.navigate('Signed');
  }, [currentUser]);

  return (
    <SignUpView
      validated={validated}
      handleContinue={handleContinue}
      nicknameState={[nickname, setNickname]}
    />
  );
};

export default SignUp;
