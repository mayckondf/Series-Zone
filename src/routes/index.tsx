import * as React from 'react';

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Episode from '@src/pages/Episode';
import Show from '@src/pages/Show';
import SignIn from '@src/pages/SignIn';
import SignUp from '@src/pages/SignUp';
import { useAppSelector } from '@src/redux/hooks';

import TabRoutes from './tabRoutes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

const Routes: React.FC = () => {
  const { users } = useAppSelector(state => state.auth);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={users.length ? 'Signed' : 'SignUp'}
      >
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'Signed'} component={TabRoutes} />
        <Stack.Screen name={'Show'} component={Show} />
        <Stack.Screen name={'Episode'} component={Episode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

export const navigate = (name: string, params: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};
