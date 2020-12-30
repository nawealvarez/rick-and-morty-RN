import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActivityIndicator, Text} from 'react-native';
import {getAllCharacters} from '../resolvers/Characters';
import CharList from '../components/CharList';
import CharDetail from '../components/CharDetail';

interface CharactersStackProps {}

const Stack = createStackNavigator();

export const CharactersStack: React.FC<CharactersStackProps> = ({}) => {
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
