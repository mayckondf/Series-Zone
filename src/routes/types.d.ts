import { Episode } from '@src/types/app/Episode';
import { Show } from '@src/types/app/Show';

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  Signed: undefined;
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Show: { show: Show };
  Episode: { episode: Episode };
};
