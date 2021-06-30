import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourite from '../screens/Favourite';
import Home from '../screens/Home';
import Authenticated from '../screens/Authenticated';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourite" component={Favourite} />
    </Tab.Navigator>
  );
}

export default MyTabs;