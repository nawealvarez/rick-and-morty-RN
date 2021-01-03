import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {RootNavProps} from '../RootParamList';

function Home({navigation}: RootNavProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REACT NATIVE CHALLENGE</Text>
      <Text style={styles.text}>Pablo Di Marco</Text>
      <Button
        title="Enter"
        titleStyle={{ fontSize: 24 }}
        onPress={() => navigation.navigate('AppTabs')}
      />
      <Text style={styles.text}>January 4, 2021</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 100,
    marginBottom: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Home;
