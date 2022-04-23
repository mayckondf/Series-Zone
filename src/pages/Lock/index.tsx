/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import { updateUser } from '@src/redux/reducers/auth';
import { RootStackParamList } from '@src/routes/types';
import { validateUserPassCode } from '@src/services/auth';
import { setSecureValue } from '@src/services/secureStore';
import { PASS_CODE_LENGTH } from '@src/utils/constants';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import LockView from './view';

const Lock: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProp<RootStackParamList, 'Lock'>>();
  const createPassCode = params?.createPassCode;

  const [passCode, setPassCode] = useState('');
  const [error, setError] = useState(false);
  const [passCodeStep, setPassCodeStep] = useState(1);
  const [firstPassCode, setFirstPassCode] = useState('');
  const [title, setTitle] = useState('');
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { currentUser } = useAppSelector(state => state.auth);

  const onPressDigit = (digit: number) => {
    setPassCode(`${passCode}${digit}`);
  };

  const resetPassCode = () => {
    setPassCode('');
  };

  const onBackPress = () => {
    if (passCodeStep === 2) {
      setFirstPassCode('');
      resetPassCode();
      setPassCodeStep(1);
    } else {
      navigation.goBack();
    }
  };

  const createPassCodeSuccess = () => {
    setSecureValue({ key: currentUser?.id!, value: passCode });
    dispatch(updateUser({ ...currentUser!, hasPassCode: true }));
    navigation.goBack();
  };

  const createPassCodeFail = () => {
    setFirstPassCode('');
    resetPassCode();
    setPassCodeStep(1);
    setError(true);
  };

  const goToNextStep = () => {
    setFirstPassCode(passCode);
    resetPassCode();
    setPassCodeStep(2);
  };

  const validatePassCode = async () => {
    const result = await validateUserPassCode(currentUser!, passCode);
    if (result) {
      return navigation.reset({ index: 0, routes: [{ name: 'Signed' }] });
    }
    resetPassCode();
    setError(true);
  };

  const handleStep = () => {
    if (passCodeStep === 1) {
      if (createPassCode) {
        goToNextStep();
      } else {
        validatePassCode();
      }
    } else if (passCode === firstPassCode) {
      createPassCodeSuccess();
    } else {
      createPassCodeFail();
    }
  };

  useEffect(() => {
    if (passCode.length === PASS_CODE_LENGTH) {
      setError(false);
      handleStep();
    }
  }, [passCode]);

  useEffect(() => {
    if (passCodeStep !== 1) {
      setTitle(t('LOCK.PASS_CODE_CONFIRM'));
    } else if (createPassCode) {
      setTitle(t('LOCK.CREATE_PASS_CODE'));
    } else {
      setTitle(t('LOCK.TITLE'));
    }
  }, [passCodeStep]);

  return (
    <LockView
      back={createPassCode}
      error={error}
      passCode={passCode}
      hasBiometricUnlock={false}
      getByBiometric={() => {}}
      onPressDigit={onPressDigit}
      resetPassCode={resetPassCode}
      title={title}
      onBackPress={onBackPress}
    />
  );
};

export default Lock;
