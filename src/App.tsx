import '@src/languages';
import React from 'react';

import { Provider } from 'react-redux';

import store from './redux/store';
import Routes from './routes';
import Theme from './theme';

const App: React.FC = () => {
  return (
    <Theme>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Theme>
  );
};

export default App;
