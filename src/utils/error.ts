import { Error } from '@src/types/app/Error';
import dayjs from 'dayjs';
import { t } from 'i18next';

export const generateError: (error: any, api?: boolean) => Error = (
  error,
  api,
) => {
  return {
    id: dayjs().toISOString(),
    title: api ? t('ERROR.API_ERROR') : t('ERROR.GENERIC_ERROR'),
    message: error?.message || t('ERROR.GENERIC_DESCRIPTION'),
    date: dayjs().toISOString(),
    type: api ? 'API' : 'GENERIC',
  };
};
