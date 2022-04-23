export type LockViewProps = {
  passCode: string;
  onPressDigit: (digit: number) => void;
  resetPassCode: () => void;
  getByBiometric: () => void;
  hasBiometricUnlock: boolean;
  error: boolean;
  back?: boolean;
  title?: string;
  onBackPress?: PropTypes.func;
  isBlocked?: PropTypes.bool;
  countdown?: PropTypes.number;
};
