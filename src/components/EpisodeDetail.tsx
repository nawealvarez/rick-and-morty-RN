import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { EpisodeNavProps } from '../EpisodesParamList';
import { getOneEpisode } from '../resolvers/Episodes';

const {height} = Dimensions.get('screen');

function EpisodeDetail({route}: EpisodeNavProps<'EpisodeDetail'>) {
  const {id} = route.params;
  const {data, loading, error} = getOneEpisode(id);
  const episode = data?.episode;

  return (
    <SafeAreaView>
      <View style={{marginTop: 50}}>
        {loading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Error.</Text>
        ) : episode ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Name: {episode.name}</Text>
            <Text style={styles.text}>Episode: {episode.episode}</Text>
            <Text style={styles.text}>Air date: {episode.air_date}</Text>
            <Text style={styles.text}>Characters:</Text>
            {episode.characters.slice(0, 5).map((character) => (
              character.name && (
              <>
                <ImageBackground
                  source={{uri: character.image}}
                  style={styles.bgImage}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{character.name}</Text>
                  </View>
                </ImageBackground>
              </>) 
            ))}
          </ScrollView>
        ) : (
          <Text>No data.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    height: height * 0.25,
    width: '100%',
    justifyContent: 'flex-end',
    
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: 'green',
    marginHorizontal: 10,
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'lightgreen',
    textAlign: 'center',
  },
});

export default EpisodeDetail;
