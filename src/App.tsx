import '@src/languages';
import '@src/config/reactotron';
import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persist } from './redux/store';
import Routes from './routes';
import Theme from './theme';

const App: React.FC = () => {
  return (
    <Theme>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <Routes />
        </PersistGate>
      </Provider>
    </Theme>
  );
};

export default App;
