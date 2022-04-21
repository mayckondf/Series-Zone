import '@src/languages';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

import Theme from './theme';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Theme>
      <View>
        <Text>{t('REGION')}</Text>
      </View>
    </Theme>
  );
};

export default App;
