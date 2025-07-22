import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from './auth';
import { useNavigation } from '@react-navigation/native';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('password dont match');
    } else {
      try {
        await registerUser(email, password);
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };
  return (
    <View className="bg-slate-300 p-5 rounded-md flex items-center justify-center w-3/4 mx-auto mt-10">
      <Text className="font-bold text-[orange] text-3xl text-center mb-5">
        Registration
      </Text>
      <View className="w-full">
        <TextInput
          placeholder="enter name"
          className="bg-white text-xl outline-none  border border-[#000] mb-2 px-4 rounded-md"
        />
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
        <TextInput
          placeholder="enter confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          className="bg-white text-xl outline-none border border-[#000] mb-2 px-4 rounded-md"
        />
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-orange-400  font-semibold rounded-sm w-full py-3"
        >
          <Text className="text-center text-2xl text-white">Sign up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="text-xl text-black">
          You have no accout? go to{' '}
          <Text
            onPress={() => navigation.navigate('LoginScreen')}
            className="text-blue-700 font-bold text-2xl"
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Registration;
