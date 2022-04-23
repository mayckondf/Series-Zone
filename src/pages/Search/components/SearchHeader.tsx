import React from 'react';

import InputSearch from '@src/components/Inputs/InputSearch';
import Text from '@src/components/Text';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useTheme } from 'styled-components';

import { Header } from '../styles';
import { SearchHeaderProps } from '../types';

// import { Container } from './styles';

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchState }) => {
  const [search, setSearch] = searchState;
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <View>
      <Header>
        <Text fontStyle="h1" color={colors.neutral._10} marginBottom={12}>
          {t('SEARCH.TITLE')}
        </Text>
      </Header>
      <InputSearch
        search={search}
        placeholder={t('SEARCH.PLACEHOLDER')}
        setSearch={setSearch}
      />
    </View>
  );
};

export default SearchHeader;
