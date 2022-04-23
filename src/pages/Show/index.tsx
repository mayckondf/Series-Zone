/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useAppSelector } from '@src/redux/hooks';
import {
  addToFavorites,
  removeFromFavorites,
} from '@src/redux/reducers/favorites';
import { RootStackParamList } from '@src/routes/types';
import { fetchShowEpisodes } from '@src/services/episodes';
import { Episode } from '@src/types/app/Episode';
import { generateSectionedEpisodesList } from '@src/utils/episodes';
import { useDispatch } from 'react-redux';

import { EpisodeSectionList } from './types';
import ShowView from './view';

const ShowPage: React.FC = () => {
  const [episodes, setEpisodes] = useState<EpisodeSectionList>([]);
  const [alreadyFavorite, setAlreadyFavorite] = useState(false);
  const { params } = useRoute<RouteProp<RootStackParamList, 'Show'>>();
  const { show } = params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    auth: { currentUser },
    favorites: { userFavorites },
  } = useAppSelector(state => state);

  const onPressEpisode = (episode: Episode) => {
    navigation.navigate('Episode', { episode });
  };

  const onPressFavorite = () => {
    if (!alreadyFavorite) {
      dispatch(addToFavorites({ show, user: currentUser! }));
    } else {
      dispatch(removeFromFavorites({ show, user: currentUser! }));
    }
  };

  useEffect(() => {
    fetchShowEpisodes({ showId: show?.id }).then(_episodes =>
      setEpisodes(generateSectionedEpisodesList(_episodes)),
    );
  }, [show]);

  useEffect(() => {
    if (userFavorites[currentUser?.id!]) {
      setAlreadyFavorite(
        !!userFavorites[currentUser?.id!].find(_show => _show?.id === show?.id),
      );
    }
  }, [userFavorites[currentUser?.id!]]);

  return (
    <ShowView
      show={show}
      episodes={episodes}
      onPressEpisode={onPressEpisode}
      onPressFavorite={onPressFavorite}
      alreadyFavorite={alreadyFavorite}
    />
  );
};

export default ShowPage;
