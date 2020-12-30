import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, Text } from 'react-native';
import { getAllCharacters } from "../resolvers/Characters";
import CharList from '../components/CharList';
import CharDetail from '../components/CharDetail';
import { RootParamList } from '../RootParamList';
import { CharactersParamList } from '../CharactersParamList';

interface CharactersStackProps {


}

// function CharList() {
//     return(
//         <Text>Char List</Text>
//     )
// }

const Stack = createStackNavigator<CharactersParamList>();

export const CharactersStack: React.FC<CharactersStackProps> = ({}) => {



    return (
        <Stack.Navigator>
  
        <Stack.Screen name="CharList" component={CharList}  />
        <Stack.Screen name="CharDetail" component={CharDetail} />
            
          
        </Stack.Navigator>
    )
}