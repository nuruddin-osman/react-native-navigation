import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { PasswordReset } from './auth';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const handlePasswordReset = async () => {
    try {
      await PasswordReset(email);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View className="bg-slate-300 p-5 rounded-md flex items-center justify-center w-3/4 mx-auto mt-10">
      <Text className="font-bold text-[orange] text-3xl text-center mb-5">
        Reset Password
      </Text>
      <TextInput
        placeholder="enter email"
        value={email}
        onChangeText={setEmail}
        className="bg-white text-xl outline-none border border-[#000] mb-2 px-4 rounded-md w-full"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={handlePasswordReset}
        className="bg-orange-400  font-semibold rounded-sm w-full py-3 "
      >
        <Text className="text-2xl text-white text-center">Reset password</Text>
      </TouchableOpacity>
      <View>
        <Text className="text-xl text-black">
          go to{' '}
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

export default ResetPassword;
