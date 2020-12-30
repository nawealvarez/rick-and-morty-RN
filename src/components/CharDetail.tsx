import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CharNavProps} from '../CharactersParamList';
import {getOneCharacter} from '../resolvers/Characters';

const {height} = Dimensions.get('screen');

function CharDetail({route}: CharNavProps<'CharDetail'>) {
  const {id} = route.params;
  const {data, loading, error} = getOneCharacter(id);
  const character = data?.character;

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator />
      ) : error ? (
        <Text>Error.</Text>
      ) : character ? (
        <View>
          <Image source={{uri: character.image}} style={styles.image} />
          <Text style={styles.text}>Name: {character.name}</Text>
          <Text style={styles.text}>Type: {character.type}</Text>
          <Text style={styles.text}>Gender: {character.gender}</Text>
          <Text style={styles.text}>Species: {character.species}</Text>
        </View>
      ) : (
        <Text>No data.</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: height * 0.5,
    width: '100%',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'green',
    marginHorizontal: 10,
  },
});

export default CharDetail;
