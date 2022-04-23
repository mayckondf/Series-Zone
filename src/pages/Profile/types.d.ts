import { User } from '@src/types/app/User';

export type ProfileViewProps = {
  currentUser: User;
  viewedCount: number;
  favoritesCount: number;
  handleLogout: () => void;
  handleLockAccount: () => void;
};
