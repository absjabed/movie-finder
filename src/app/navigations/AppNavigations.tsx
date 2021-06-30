import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Text from '../components/Text'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/color';
import Favourite from '../screens/Favourite';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{
          tabBarLabel:({focused, color, position}) => (
            <Text>Home</Text>
          ),
          tabBarIcon:({focused, color, size})=> (
            <Icon name="home" size={25} color={focused ? "red" : "#000"} />
          ),
      }} component={Home} />
      <Tab.Screen name="Favourite"
                  options={{
                    tabBarLabel: ({focused, color, position}) => (
                      <Text >Favourite</Text>
                    ),
                    tabBarIcon: ({focused, color, size}) => (
                      <Icon name="heart" size={20} color= {focused ? "red" : "#000"} />
                    )
                }}
                component={Favourite} />
    </Tab.Navigator>
  );
}

export default MyTabs;