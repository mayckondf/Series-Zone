/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import Button from '@src/components/Button';
import Flex from '@src/components/Flex';
import Icon from '@src/components/Icon';
import { InputGradient } from '@src/components/Inputs';
import Text from '@src/components/Text';
import useKeyboard from '@src/hooks/useKeyboard';
import { useAnimationState } from 'moti';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import {
  AnimatedBackground,
  AppNameContainer,
  CenterView,
  Container,
  KeyboardView,
  StatusBar,
  Subtitle,
  Title,
} from './styles';
import { SignUpViewProps } from './types';

const SignUpView: React.FC<SignUpViewProps> = ({
  nicknameState,
  validated,
  handleContinue,
}) => {
  const [nickname, setNickname] = nicknameState;

  const [isKeyboardVisible] = useKeyboard({
    useWillHide: true,
    useWillShow: true,
  });
  const { colors } = useTheme();
  const { t } = useTranslation();

  const animationState = useAnimationState({
    visible: {
      backgroundColor: colors.primary,
    },
    transparent: {
      backgroundColor: colors.transparent,
    },
  });

  useEffect(() => {
    if (isKeyboardVisible) {
      animationState.transitionTo('visible');
    } else {
      animationState.transitionTo('transparent');
    }
  }, [isKeyboardVisible]);

  return (
    <Container>
      <StatusBar dark={!isKeyboardVisible} translucent />
      <AnimatedBackground state={animationState}>
        <KeyboardView>
          <Flex flex={12} />
          {isKeyboardVisible && (
            <>
              <Title fontStyle="h2">{t('SIGN_UP.TITLE')}</Title>
              <Subtitle fontStyle="h4">{t('SIGN_UP.SUBTITLE')}</Subtitle>
            </>
          )}
          <Flex flex={6} />
          {!isKeyboardVisible && (
            <>
              <CenterView>
                <Icon variant="logo" size="xxl" />
                <AppNameContainer>
                  <Text fontStyle="h1">{t('APP_NAME')}</Text>
                  <Subtitle fontStyle="h3">{t('SLOGAN')}</Subtitle>
                </AppNameContainer>
              </CenterView>
              <Flex flex={6} />
            </>
          )}
          <Flex flex={3} />
          <InputGradient
            value={nickname}
            onChangeText={setNickname}
            placeholder={t('SIGN_UP.INPUT.PLACEHOLDER')}
          />
          <Flex flex={3} />
          {isKeyboardVisible && (
            <>
              <Flex flex={6} />
              <Button onPress={handleContinue} disabled={!validated}>
                {t('SIGN_UP.BUTTON')}
              </Button>
              <Flex flex={4} />
            </>
          )}
        </KeyboardView>
      </AnimatedBackground>
    </Container>
  );
};

export default SignUpView;
