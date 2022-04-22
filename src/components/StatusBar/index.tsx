import React from 'react';

import { StyledStatusBar } from './styles';

const StatusBar: React.FC<{ dark?: boolean }> = props => {
  return <StyledStatusBar {...props} translucent />;
};

export default StatusBar;
