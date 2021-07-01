import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Text from '../components/Text'
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../theme/color';
import Favourite from '../screens/Favourite';
import Home from '../screens/Home';
import { typography } from '../theme/typography';

const Tab = createBottomTabNavigator();

/**Screeen Bottom tabs */
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{
          tabBarLabel:({focused, color, position}) => (
            <Text  style={{color: focused ? Colors.blue : color, fontFamily: focused ? typography.ubuntuMedium : typography.ubuntuRegular}}>Home</Text>
          ),
          tabBarIcon:({focused, color, size})=> (
            <Icon name="home" size={25} color={focused ? Colors.navy : Colors.lightGray} />
          ),
      }} component={Home} />
      <Tab.Screen name="Favourites"
                  options={{
                    tabBarLabel: ({focused, color, position}) => (
                      <Text style={{color: focused ? Colors.blue : color, fontFamily: focused ? typography.ubuntuMedium : typography.ubuntuRegular}}>Favourites</Text>
                    ),
                    tabBarIcon: ({focused, color, size}) => (
                      <Icon name="heart" size={20} color= {focused ? Colors.red : Colors.lightGray} />
                    )
                }}
                component={Favourite} />
    </Tab.Navigator>
  );
}

export default BottomTabs;