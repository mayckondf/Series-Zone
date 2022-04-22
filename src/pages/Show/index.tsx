import React, { useEffect } from 'react';

import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '@src/routes/types';

import ShowView from './view';

const ShowPage: React.FC = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Show'>>();

  useEffect(() => {}, [params]);

  return <ShowView show={params.show} />;
};

export default ShowPage;
