import React from 'react';

import Logo from '@src/assets/svgs/logo.svg';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('REGION')}</Text>
      <Logo />
    </View>
  );
};

export default SignIn;
