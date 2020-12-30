import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Character } from "../interfaces";

interface Props {
  character: Character;
  onPress: () => void;
}

const CharCard: React.FC<Props> = ({character, onPress}) => {

  return (
    <>
        <TouchableOpacity style={styles.gridItem} 
        onPress={onPress}
        >
          <View style={styles.item}>
            <View style={styles.card}>
                <View style={styles.row}>
                    <ImageBackground source={{ uri: character.image }} style={styles.bgImage} >
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{character.name}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        </View>
        </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
      height: '100%',
      width: '100%',
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#f5f5f5',
      borderRadius: 10
  },
  bgImage: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-end',
      
  },
  row: {
      flexDirection: 'row',
      height: '100%'
  },
  titleContainer: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingVertical: 5,
      paddingHorizontal: 12
  },
  title: {
      fontSize: 12,
      color: 'white',
      textAlign: 'center'
  },
  card: {
      shadowColor: 'black',
      shadowOffset: {
          width: 0,
          height: 2
      },
      elevation: 5,

  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
},
})

export default CharCard;
