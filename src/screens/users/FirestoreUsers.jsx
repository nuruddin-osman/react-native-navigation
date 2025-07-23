import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const FirestoreUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);
  return (
    <View className="px-4 bg-slate-300 w-full">
      <Text className="text-5xl font-bold text-orange-500 my-5">
        FirestoreUsers
      </Text>
      <View className="w-[90%] mx-auto">
        <TextInput
          placeholder="enter name"
          value={name}
          onChangeText={setName}
          keyboardType="text"
          className="px-5 py-3 border outline-none text-lg rounded-md border-blue-500 bg-white"
        />
        <TextInput
          placeholder="enter name"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="px-5 py-3 border outline-none text-lg rounded-md border-blue-500 bg-white"
        />
        <TextInput
          placeholder="enter name"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone"
          className="px-5 py-3 border outline-none text-lg rounded-md border-blue-500 bg-white"
        />
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
};

export default FirestoreUsers;
