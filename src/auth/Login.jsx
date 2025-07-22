import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import { registerUser } from './auth';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

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
        <TouchableOpacity className="bg-orange-400  font-semibold rounded-sm w-full py-3">
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

export default Registration;
