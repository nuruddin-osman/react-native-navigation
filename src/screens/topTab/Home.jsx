import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../../style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [user, setUser] = useState('');
  const [getUsers, setGetUsers] = useState('');
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('users', user);
      Alert.alert('Success', 'User saved successfully!');
      //   console.log('users', user);

      setUser('');
    } catch (e) {
      console.error('AsyncStorage Save Error:', e);
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('users');
      Alert.alert('Success', 'User Deleted successfully!');
      setGetUsers('');
    } catch (e) {
      console.error('AsyncStorage Save Error:', e);
    }
  };
  const getData = async () => {
    try {
      const findUser = await AsyncStorage.getItem('users');
      if (findUser) {
        Alert.alert('Success', 'User get successfully!');
      }
      setGetUsers(findUser);
    } catch (e) {
      console.error('AsyncStorage Save Error:', e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.containers}>
      <Text className="text-5xl font-bold text-[orange] my-5">Home</Text>
      <TextInput
        placeholder="enter"
        onChangeText={setUser}
        value={user}
        style={styles.inputs}
      />
      <View style={{ flex: 1, flexDirection: 'column', gap: 20 }}>
        <Button onPress={storeData} title="Save user" />
        <Button onPress={getData} title="Get user" />
        <Button onPress={removeData} title="Delete user" />
      </View>
      <Text style={styles.card}>{getUsers}</Text>
    </View>
  );
};

export default Home;
