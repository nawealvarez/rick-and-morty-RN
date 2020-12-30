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

  // item: {
  //   height: '100%',
  //   width: '100%',
  //   padding: 10,
  //   marginVertical: 5,
  //   backgroundColor: '#f5f5f5',
  //   borderRadius: 30,
  // },
  // row: {
  //   flexDirection: 'row',
  //   height: '100%',
  // },
  // titleContainer: {
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  //   paddingVertical: 5,
  //   paddingHorizontal: 12,
  // },
  // title: {
  //   fontSize: 12,
  //   color: 'white',
  //   textAlign: 'center',
  // },
  // card: {
  //   shadowColor: 'black',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   elevation: 5,
  // },
  // gridItem: {
  //   flex: 1,
  //   margin: 15,
  //   height: 150,
  // },
});

export default LocationCard;
