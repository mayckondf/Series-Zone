import '@src/languages';
import React from 'react';

import Routes from './routes';
import Theme from './theme';

const App: React.FC = () => {
  return (
    <Theme>
      <Routes />
    </Theme>
  );
};

export default App;
