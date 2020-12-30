import React from 'react';
import {Switch, Text, View} from 'react-native';

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
    <View  style={{flex:1, flexDirection: "row", alignSelf:"center", padding: 10}}>
      <Text>{secondSearch}</Text>

      <Switch 
        value={checked}
        onValueChange={handleSwitch}
        trackColor={{ false: "#a8111b", true: "#81b0ff" }}
        thumbColor="#f5dd4b"
        ios_backgroundColor="#3e3e3e"
      />

      <Text>Name</Text>
    </View>
  );
};

export default SwitchComponent;
