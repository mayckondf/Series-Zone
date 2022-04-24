import { User } from '@src/types/app/User';

import { getSecureValue } from './secureStore';

export const validateUserPassCode = async (user: User, passCode: string) => {
  const result = await getSecureValue({ key: user.id });
  if (result?.success && passCode.localeCompare(result?.value || '') === 0) {
    return true;
  }
  return false;
};
