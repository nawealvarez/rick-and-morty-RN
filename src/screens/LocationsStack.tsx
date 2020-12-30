import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LocationDetail from "../components/LocationDetail";
import LocationList from "../components/LocationList";


const Stack = createStackNavigator();

export const LocationsStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LocationList"
        component={LocationList}
        options={{title: 'Locations'}}
      />
      <Stack.Screen
        name="LocationDetail"
        component={LocationDetail}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};