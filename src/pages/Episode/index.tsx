import React from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/types';

import EpisodeView from './view';

const EpisodePage: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Episode'>>();
  const { episode } = params;

  return <EpisodeView episode={episode} />;
};

export default EpisodePage;
