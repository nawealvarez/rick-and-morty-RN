import React from 'react';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import { CharNavProps } from '../CharactersParamList';
import { CharDetailParamList } from '../CharDetailParamList';

import { getOneCharacter } from "../resolvers/Characters";

interface Props {
  id: string;
}

function CharDetail  ({route}: CharNavProps<"CharDetail">) {
  const {id} = route.params
  const { data, loading, error } = getOneCharacter(id)
  const character = data?.character;

  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Error.</Text>
      ) : character ? (
        <View>
         
            <Text>Name: {character.name}</Text>
          
            <Text>Type: {character.type}</Text>
         
            <Text>Gender: {character.gender}</Text>
        
            <Text>Species: {character.species}</Text>
         
          <ImageBackground
           
           
            source={{uri: character.image}}
          />
        </View>
      ) : (
        <Text>No data.</Text>
      )}
    </>
  );
};

export default CharDetail;
