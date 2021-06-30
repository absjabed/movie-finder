import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Text from '../components/Text'
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/color';
import Favourite from '../screens/Favourite';
import Home from '../screens/Home';
import { typography } from '../theme/typography';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{
          tabBarLabel:({focused, color, position}) => (
            <Text  style={{color: focused ? colors.blue : color, fontFamily: focused ? typography.ubuntuMedium : typography.ubuntuRegular}}>Home</Text>
          ),
          tabBarIcon:({focused, color, size})=> (
            <Icon name="home" size={25} color={focused ? colors.navy : colors.lightGray} />
          ),
      }} component={Home} />
      <Tab.Screen name="Favourites"
                  options={{
                    tabBarLabel: ({focused, color, position}) => (
                      <Text style={{color: focused ? colors.blue : color, fontFamily: focused ? typography.ubuntuMedium : typography.ubuntuRegular}}>Favourites</Text>
                    ),
                    tabBarIcon: ({focused, color, size}) => (
                      <Icon name="heart" size={20} color= {focused ? colors.navy : colors.lightGray} />
                    )
                }}
                component={Favourite} />
    </Tab.Navigator>
  );
}

export default MyTabs;