import React from 'react';

import Icon from '@src/components/Icon';
import StatusBar from '@src/components/StatusBar';
import Home from '@src/pages/Home';
import Search from '@src/pages/Search';
import {
  AnimatedTabBarNavigator,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { useTheme } from 'styled-components';

import { RootStackParamList } from './types';

const Tab = AnimatedTabBarNavigator<RootStackParamList>();

const TabRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
          activeBackgroundColor: colors.accent,
          shadow: true,
        }}
        appearance={{
          whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
          whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
          tabBarBackground: colors.primary,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Icon
                variant="home"
                size="sm"
                color={focused ? colors.secondary : colors.tertiary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Icon
                variant="search"
                size="sm"
                color={focused ? colors.secondary : colors.tertiary}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Search}
          options={{
            tabBarIcon: ({ focused }: { focused: boolean }) => (
              <Icon
                variant="favorite"
                size="sm"
                color={focused ? colors.secondary : colors.tertiary}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabRoutes;
