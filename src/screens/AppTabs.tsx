import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from '../AppParamList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CharactersStack } from './CharactersStack';
import { LocationsStack } from './LocationsStack';
import { EpisodesStack } from './EpisodesStack';

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Characters') {
            iconName = 'people';
          } else if (route.name === 'Locations') {
            iconName = 'md-locate-sharp';
          } else if (route.name === 'Episodes') {
            iconName = 'ios-film-sharp'
          }

          if (iconName !== undefined) {
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}>
      <Tabs.Screen name="Characters" component={CharactersStack} />
      <Tabs.Screen name="Locations" component={LocationsStack} />
      <Tabs.Screen name="Episodes" component={EpisodesStack} />
    </Tabs.Navigator>
  );
};

export default AppTabs;
