import api from '@src/api';
import { addShows } from '@src/redux/reducers/shows';
import store from '@src/redux/store';
import dayjs from 'dayjs';

export const fetchShows = async () => {
  const state = store.getState();
  const response = await api.get(`/shows?page=${state.shows.currentPage}`);
  store.dispatch(addShows(response.data));
  return response.data;
};

export const fetchShowDetails = async ({ showId }: { showId: number }) => {
  const response = await api.get(`/shows/${showId}`);
  return response.data;
};

export const fetchShowsLaunchingToday = async () => {
  const today = dayjs().format('YYYY-MM-DD');
  const response = await api.get(`/shows?date=${today}`);
  return response.data;
};
