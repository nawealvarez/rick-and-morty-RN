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
import {ScrollView} from 'react-native-gesture-handler';
import {LocNavProps} from '../LocationsParamList';
import {getOneLocation} from '../resolvers/Locations';

const {height} = Dimensions.get('screen');

function LocationDetail({route}: LocNavProps<'LocationDetail'>) {
  const {id} = route.params;
  const {data, loading, error} = getOneLocation(id);
  const location = data?.location;

  return (
    <SafeAreaView>
      <View style={{marginTop: 50}}>
        {loading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text>Error.</Text>
        ) : location ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text}>Name: {location.name}</Text>
            <Text style={styles.text}>Type: {location.type}</Text>
            <Text style={styles.text}>Dimension: {location.dimension}</Text>
            <Text style={styles.text}>Residents:</Text>
            {location.residents.slice(0, 5).map((resident) => (
              resident.name && (
              <>
                <ImageBackground
                  source={{uri: resident.image}}
                  style={styles.bgImage}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>{resident.name}</Text>
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

export default LocationDetail;
