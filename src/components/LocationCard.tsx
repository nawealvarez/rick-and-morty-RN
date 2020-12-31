import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Location} from '../interfaces';

interface Props {
  location: Location;
  onPress: () => void;
}

const {width} = Dimensions.get('screen');

const LocationCard: React.FC<Props> = ({location, onPress}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <Text style={styles.title} numberOfLines={2}>
            {location.name}
          </Text>
          <Text style={styles.text}> Dimension:</Text>
          <Text style={styles.text} numberOfLines={2}>
            {location.dimension}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    height: 140,
    width: width * 0.4,
    justifyContent: 'center',
    margin: width * 0.05,
  },
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  title: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },

});

export default LocationCard;
