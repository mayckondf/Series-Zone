import { User } from '@src/types/app/User';

export type AuthStore = {
  currentUser?: User;
  users: User[];
};

export type PreferencesStore = {
  language: string;
};
