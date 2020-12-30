/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ApolloProvider} from '@apollo/react-hooks';
import {AppRegistry} from 'react-native';

import Home from './src/screens/Home';
import AppTabs from './src/screens/AppTabs';

import {RootParamList} from './src/RootParamList';
import {client} from './src/apollo/client';

interface AppProps {}

const Stack = createStackNavigator<RootParamList>();

export const App: React.FC<AppProps> = ({}) => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AppTabs" component={AppTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};
AppRegistry.registerComponent('RickMortyRN', () => App);

export default App;
