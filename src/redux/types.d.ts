import { Show } from '@src/types/app/Show';
import { User } from '@src/types/app/User';

export type AuthStore = {
  currentUser?: User;
  users: User[];
};

export type UserPayload = {
  nickname: User['nickname'];
};

export type PreferencesStore = {
  language: string;
};

export type ShowsStore = {
  currentPage: number;
  shows: Show[];
};

export type FavoritesStore = {
  userFavorites: { [key: string]: Show[] };
};

export type AddFavoritePayload = {
  show: Show;
  user: User;
};
