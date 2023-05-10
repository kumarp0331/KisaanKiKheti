import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '80%',
    marginBottom: 10,
  },
});

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (value: string) => {
    setName(value);
  };

  const handleButtonClick = () => {
    setMessage(`Hello, ${name}!`);
    setName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Kisaan Ki Kheti!</Text>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={handleInputChange}
      />
      <Button title="Say hello" onPress={handleButtonClick} />
      <Text>{message}</Text>
    </View>
  );
};

export default App;
