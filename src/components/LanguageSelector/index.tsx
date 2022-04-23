import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../Icon';
import Text from '../Text';
import { Container } from './styles';
import { LanguageSelectorProps } from './types';

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  absolute = true,
}) => {
  const insets = useSafeAreaInsets();
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    if (i18n.language === 'pt-BR') {
      return i18n.changeLanguage('en-US');
    }
    return i18n.changeLanguage('pt-BR');
  };

  return (
    <Container
      absolute={absolute}
      safeAreaInsets={insets}
      onPress={handleChangeLanguage}
    >
      <Icon
        variant={i18n.language === 'pt-BR' ? 'brazil' : 'unitedStates'}
        size="sm"
      />
      <Text fontStyle="b2" marginTop={6}>
        {t('COUNTRY')}
      </Text>
    </Container>
  );
};

export default LanguageSelector;
