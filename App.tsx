import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('Hello World');

  const toggleMessage = () => {
    setMessage(prevMessage => 
      prevMessage === 'Hello World' ? 'Hello React Native' : 'Hello World'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Toggle Message" onPress={toggleMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;