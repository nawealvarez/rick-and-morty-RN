import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { RootNavProps } from '../RootParamList';

function Home({navigation}: RootNavProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text>REACT NATIVE CHALLENGE</Text>
      <Button title="Enter" onPress={() => navigation.navigate('AppTabs')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
