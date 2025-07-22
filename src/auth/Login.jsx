import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from './auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('email or password field is empty');
    }
    try {
      const { emailVerified } = await loginUser(email, password);
      if (emailVerified) {
        Alert.alert('Login Successful', 'Go to Home');
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', 'Email in not verfied');
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="bg-slate-300 p-5 rounded-md flex items-center justify-center w-3/4 mx-auto mt-10">
      <Text className="font-bold text-[orange] text-3xl text-center mb-5">
        Login
      </Text>
      <View className="w-full">
        <TextInput
          placeholder="enter email"
          value={email}
          onChangeText={setEmail}
          className="bg-white text-xl outline-none border border-[#000] mb-2 px-4 rounded-md"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="enter password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="bg-white text-xl outline-none border border-[#000] mb-2 px-4 rounded-md"
        />
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-orange-400  font-semibold rounded-sm w-full py-3"
        >
          <Text className="text-center text-2xl text-white">Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-xl text-black">
          You have no accout? go to{' '}
          <Text
            onPress={() => navigation.navigate('RegistrationScreen')}
            className="text-blue-700 font-bold text-2xl"
          >
            Registration
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
