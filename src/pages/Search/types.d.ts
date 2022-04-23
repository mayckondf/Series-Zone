import { ShowResult } from '@src/types/app/Show';

export type SearchProps = {
  onItemPress: (show: Show) => void;
  searchResult: ShowResult[];
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
};

export type SearchHeaderProps = {
  searchState: [string, React.Dispatch<React.SetStateAction<string>>];
};
