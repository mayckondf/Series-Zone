import 'react-native-reanimated';

import '@src/languages';
import '@src/config/reactotron';
import React from 'react';

import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persist } from './redux/store';
import Routes from './routes';
import Theme from './theme';

LogBox.ignoreLogs(['ViewPropTypes']);

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
