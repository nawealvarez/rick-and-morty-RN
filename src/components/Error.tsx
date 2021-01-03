import React from 'react';
import {ApolloError} from '@apollo/client';
import {Button} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  error: ApolloError;
  handleChange: (text: string) => void;
}

const ErrorComponent: React.FC<Props> = ({error, handleChange}) => {
  const message =
    error.message === '404: Not Found'
      ? 'No search results.'
      : 'Something went wrong, Please try again later!';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button
        style={styles.button}
        title="Retry!"
        onPress={() => handleChange('')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingTop: 75,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    paddingTop: 20,
  },
});

export default ErrorComponent;
