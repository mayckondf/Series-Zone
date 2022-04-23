import React from 'react';

import Button from '@src/components/Button';
import Icon from '@src/components/Icon';
import Text from '@src/components/Text';
import { User } from '@src/types/app/User';
import { isOdd } from '@src/utils/number';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import { Container, Header, StyledFlatList, UserCard } from './styles';
import { SignInViewProps } from './types';

const SignInView: React.FC<SignInViewProps> = ({
  users,
  handleUser,
  handleCreateUser,
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Container safeAreaInsets={insets}>
      <StyledFlatList<React.ElementType>
        data={users}
        keyExtractor={(item: User) => item?.id}
        renderItem={({ item, index }: { item: User; index: number }) => (
          <UserCard
            marginRight={!isOdd(index)}
            onPress={() => handleUser(item)}
          >
            <Icon variant="users" size="md" />
            <Text fontStyle="h2" marginTop={12}>
              {item?.nickname}
            </Text>
          </UserCard>
        )}
        safeAreaInsets={insets}
        ListHeaderComponent={
          <Header>
            <Icon variant="logo" size="xxl" />
            <Text fontStyle="h1" marginTop={12}>
              {t('APP_NAME')}
            </Text>
          </Header>
        }
      />
      <Button color={colors.neutral._00} onPress={handleCreateUser}>
        {t('SIGN_IN.CREATE_USER')}
      </Button>
    </Container>
  );
};

export default SignInView;
