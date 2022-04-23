import React from 'react';

import Button from '@src/components/Button';
import Flex from '@src/components/Flex';
import Icon from '@src/components/Icon';
import TabPageContainer from '@src/components/TabPageContainer';
import Text from '@src/components/Text';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import {
  ButtonLockAccount,
  HorizontalRow,
  Info,
  InfoContainer,
  LogoWrapper,
  ScrollView,
  UserInfo,
} from './styles';
import { ProfileViewProps } from './types';

const ProfileView: React.FC<ProfileViewProps> = ({
  currentUser,
  handleLogout,
  favoritesCount,
  handleLockAccount,
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TabPageContainer>
      <ScrollView safeAreaInsets={insets}>
        <HorizontalRow>
          <LogoWrapper>
            <Icon variant="logo" size="lg" />
          </LogoWrapper>
          <UserInfo>
            <Text fontStyle="h4">
              {currentUser?.nickname}
              <Text fontStyle="b1" color={colors.smooth}>
                {t('PROFILE.USER_ID', { id: currentUser?.id })}
              </Text>
            </Text>
            <Text fontStyle="b1" color={colors.smooth}>
              {t('PROFILE.USER_SINCE') +
                dayjs(currentUser?.createdAt).format('DD/MM/YYYY')}
            </Text>
          </UserInfo>
          <ButtonLockAccount onPress={handleLockAccount}>
            <Icon
              variant={currentUser?.hasPassCode ? 'unlock' : 'lock'}
              color={colors.secondary}
              size="sm"
            />
          </ButtonLockAccount>
        </HorizontalRow>
        <InfoContainer>
          <Info hasMargin>
            <Text fontStyle="h2">{favoritesCount}</Text>
            <Text fontStyle="h4" textAlign="center" marginTop={12}>
              {t('PROFILE.FAVORITES')}
            </Text>
          </Info>
          <Info>
            <Text fontStyle="h2">{0}</Text>
            <Text fontStyle="h4" textAlign="center" marginTop={12}>
              {t('PROFILE.VIEWED_SHOWS')}
            </Text>
          </Info>
        </InfoContainer>
        <Flex />
        <Button onPress={handleLogout}>{t('PROFILE.LOGOUT')}</Button>
      </ScrollView>
    </TabPageContainer>
  );
};

export default ProfileView;
