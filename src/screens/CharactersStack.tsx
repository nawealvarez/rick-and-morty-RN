import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CharList from '../components/CharList';
import CharDetail from '../components/CharDetail';

const Stack = createStackNavigator();

export const CharactersStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharList"
        component={CharList}
        options={{title: 'Characters'}}
      />
      <Stack.Screen
        name="CharDetail"
        component={CharDetail}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};
