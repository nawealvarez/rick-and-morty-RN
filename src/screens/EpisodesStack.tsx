import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import EpisodeList from '../components/EpisodeList';
import EpisodeDetail from '../components/EpisodeDetail';


const Stack = createStackNavigator();

export const EpisodesStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EpisodeList"
        component={EpisodeList}
        options={{title: 'Episodes'}}
      />
      <Stack.Screen
        name="EpisodeDetail"
        component={EpisodeDetail}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};