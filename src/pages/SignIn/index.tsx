import React from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

const SignIn: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t('REGION')}</Text>
    </View>
  );
};

export default SignIn;
