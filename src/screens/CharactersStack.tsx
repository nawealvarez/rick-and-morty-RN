import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, Text } from 'react-native';
import { getAllCharacters } from "../resolvers/Characters";
import CharList from '../components/CharList';

interface CharactersStackProps {


}

// function CharList() {
//     return(
//         <Text>Char List</Text>
//     )
// }

const Stack = createStackNavigator();

export const CharactersStack: React.FC<CharactersStackProps> = ({}) => {



    return (
        <Stack.Navigator>
  
        <Stack.Screen name="CharList" component={CharList} />
    
            
          
        </Stack.Navigator>
    )
}