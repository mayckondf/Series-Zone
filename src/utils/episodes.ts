import i18n from '@src/languages';
import type { EpisodeSectionList } from '@src/pages/Show/types';
import { Episode } from '@src/types/app/Episode';

export const generateSectionedEpisodesList: (
  episodes: Episode[],
) => EpisodeSectionList = episodes => {
  let seasons: number[] = [];
  episodes.forEach(episode => {
    seasons = [...new Set([...seasons, episode.season])];
  });

  return seasons.map(season => ({
    title: i18n.t('SHOW.SEASON_TITLE', { number: season }),
    data: episodes.filter(episode => episode.season === season),
  }));
};
