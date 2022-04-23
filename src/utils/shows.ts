import { ShowsByCategory, Show } from '@src/types/app/Show';

export const organizeShowsByCategory: (
  shows: Show[],
  previousShows: ShowsByCategory,
) => ShowsByCategory = (shows, previousShows) => {
  const organizedShows: ShowsByCategory = shows.reduce(
    (categorizedList, show) => {
      let mutableCategorizedList = { ...categorizedList };
      show.genres.forEach(genre => {
        if (mutableCategorizedList[genre] instanceof Array) {
          mutableCategorizedList[genre] = [
            ...mutableCategorizedList[genre],
            show,
          ];
        } else {
          mutableCategorizedList[genre] = [show];
        }
      });
      return mutableCategorizedList;
    },
    previousShows || ({} as ShowsByCategory),
  );
  return organizedShows;
};
