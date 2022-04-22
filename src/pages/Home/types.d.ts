import { Show } from '@src/types/app/Show';

export type HomeViewProps = {
  shows: Show[];
  loadMoreShows: () => void;
  onItemPress: (show: Show) => void;
};
