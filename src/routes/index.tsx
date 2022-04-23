import * as React from 'react';

import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Episode from '@src/pages/Episode';
import Lock from '@src/pages/Lock';
import Show from '@src/pages/Show';
import SignIn from '@src/pages/SignIn';
import SignUp from '@src/pages/SignUp';
import { useAppSelector } from '@src/redux/hooks';

import TabRoutes from './tabRoutes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

const Routes: React.FC = () => {
  const { currentUser, users } = useAppSelector(state => state.auth);

  const getInitialRoute: () => keyof RootStackParamList = () => {
    if (!users.length) return 'SignUp';
    if (currentUser && currentUser?.hasPassCode) return 'Lock';
    if (currentUser) return 'Signed';
    return 'SignIn';
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={getInitialRoute()}
      >
        <Stack.Screen name={'SignUp'} component={SignUp} />
        <Stack.Screen name={'SignIn'} component={SignIn} />
        <Stack.Screen name={'Signed'} component={TabRoutes} />
        <Stack.Screen name={'Show'} component={Show} />
        <Stack.Screen name={'Episode'} component={Episode} />
        <Stack.Screen name={'Lock'} component={Lock} />
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
