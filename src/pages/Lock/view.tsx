import React from 'react';

import Flex from '@src/components/Flex';
import Icon from '@src/components/Icon';
import StatusBar from '@src/components/StatusBar';
import Text from '@src/components/Text';
import { PASS_CODE_LENGTH } from '@src/utils/constants';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import {
  BackButton,
  Container,
  Digit,
  DigitsWrapper,
  KeyboardButton,
  KeyboardLine,
  KeyboardWrapper,
  Number,
  WhiteSpace,
} from './styles';
import { LockViewProps } from './types';

const LockView: React.FC<LockViewProps> = ({
  passCode,
  onPressDigit,
  resetPassCode,
  error,
  hasBiometricUnlock,
  back,
  getByBiometric,
  title,
  onBackPress,
  isBlocked,
  countdown,
}) => {
  const insets = useSafeAreaInsets();
  const digits = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  const { t } = useTranslation();
  const passCodeLengthArray = Array.from(Array(PASS_CODE_LENGTH).keys());
  const { colors } = useTheme();

  const renderError = () => {
    if (error) {
      if (isBlocked) {
        return (
          <Text fontStyle="b3" color={colors.feedback.negative}>
            {t('LOCK.ACCOUNT_LOCKED', { value: countdown })}
          </Text>
        );
      }
      return (
        <Text fontStyle="b3" color={colors.feedback.negative}>
          {t('LOCK.WRONG_CODE')}
        </Text>
      );
    }
    return <Flex />;
  };

  return (
    <Container>
      <StatusBar />
      {back && (
        <BackButton safeAreaInsets={insets} onPress={onBackPress}>
          <Icon variant="arrowLeft" color={colors.neutral._00} size="sm" />
        </BackButton>
      )}
      <Flex flex={3} />
      {renderError()}
      <Flex />
      <Text fontStyle="h2">{title}</Text>
      <Flex />
      <DigitsWrapper>
        {passCodeLengthArray.map(item => (
          <Digit key={item} done={passCode.length >= item + 1} />
        ))}
      </DigitsWrapper>
      <Flex />
      <KeyboardWrapper>
        {digits.map(range => (
          <KeyboardLine key={`range${range[0]}`}>
            {range.map(digit => (
              <KeyboardButton
                key={`line${digit}`}
                onPress={() => onPressDigit(digit)}
                disabled={isBlocked}
              >
                {({ pressed }) => (
                  <Number fontStyle="h3" pressed={pressed}>
                    {digit}
                  </Number>
                )}
              </KeyboardButton>
            ))}
          </KeyboardLine>
        ))}
        <KeyboardLine>
          {hasBiometricUnlock ? (
            <WhiteSpace onPress={getByBiometric} disabled={isBlocked}>
              {/* <GetBiometricIcon /> */}
            </WhiteSpace>
          ) : (
            <WhiteSpace />
          )}
          <KeyboardButton onPress={() => onPressDigit(0)} disabled={isBlocked}>
            {({ pressed }) => (
              <Number fontStyle="h3" pressed={pressed}>
                0
              </Number>
            )}
          </KeyboardButton>
          <WhiteSpace onPress={resetPassCode} disabled={isBlocked}>
            <Icon variant="delete" size="sm" />
          </WhiteSpace>
        </KeyboardLine>
      </KeyboardWrapper>

      <Flex flex={4} />
    </Container>
  );
};

export default LockView;
