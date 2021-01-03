import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

interface Props {
  checked: boolean;
  handleSwitch: () => void;
  secondSearch: string;
}

const SwitchComponent: React.FC<Props> = ({
  checked,
  handleSwitch,
  secondSearch,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{secondSearch}</Text>

      <Switch
        value={checked}
        onValueChange={handleSwitch}
        trackColor={{false: '#a8111b', true: '#6155a6'}}
        thumbColor="#ffabe1"
        ios_backgroundColor="#3e3e3e"
      />

      <Text style={styles.text}>Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row', 
    alignSelf: 'center', 
    padding: 10},
  text: {
    fontSize: 14, 
    padding: 5
  }
});

export default SwitchComponent;
