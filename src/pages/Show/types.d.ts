import { Episode } from '@src/types/app/Episode';
import { Show } from '@src/types/app/Show';

export type ListHeaderProps = {
  show: Show;
  onPressFavorite: () => void;
  alreadyFavorite: boolean;
};

export type ShowProps = {
  show: Show;
  episodes: EpisodeSectionList;
  onPressEpisode: (episode: Episode) => void;
  onPressFavorite: () => void;
  alreadyFavorite: boolean;
};

export type EpisodeSection = {
  title: string;
  data: Episode[];
};

export type EpisodeSectionList = EpisodeSection[];
