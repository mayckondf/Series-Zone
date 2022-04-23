import { User } from '@src/types/app/User';

export type ProfileViewProps = {
  currentUser: User;
  handleLogout: () => void;
  favoritesCount: number;
  viewedCount: number;
};
