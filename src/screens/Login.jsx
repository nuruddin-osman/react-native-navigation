import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../style';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.paddings}>
        <TextInput
          style={styles.inputs}
          placeholder="enter username"
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.inputs}
          placeholder="enter email"
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Button
        onPress={() =>
          navigation.navigate('Home', {
            users: {
              name: username,
              email: email,
            },
          })
        }
        title="Go to Home"
      />
    </View>
  );
};

export default Login;
