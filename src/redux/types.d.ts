import { User } from '@src/types/app/User';

export type AuthStore = {
  user?: User;
};

export type PreferencesStore = {
  language: string;
};
