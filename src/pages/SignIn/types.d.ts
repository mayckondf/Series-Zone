import { User } from '@src/types/app/User';

export type SignInViewProps = {
  users: User[];
  handleUser: (user: User) => void;
  handleCreateUser: () => void;
};
