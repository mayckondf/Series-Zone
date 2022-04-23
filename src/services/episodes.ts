import api from '@src/api';

export const fetchShowEpisodes = async ({ showId }: { showId: number }) => {
  const response = await api.get(`/shows/${showId}/episodes`);
  return response.data;
};
