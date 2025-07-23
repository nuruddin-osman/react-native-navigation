import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { writeData } from '../../database/firestoreDatabase';

const FirestoreUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);

  const handleSubmit = async () => {
    try {
      await writeData(users);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View className="px-4 w-full">
      <View className="">
        <Text className="text-5xl font-bold text-orange-500 my-5">
          FirestoreUsers
        </Text>
      </View>
      <View className="w-[90%] mx-auto bg-slate-300 p-5">
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
        <TouchableOpacity
          onPress={handleSubmit}
          className=" bg-orange-500 rounded-md py-3"
        >
          <Text className="text-2xl font-bold text-center">Add user</Text>
        </TouchableOpacity>
      </View>
      <View className="flex justify-between items-center">
        <View>
          <Text className="text-base text-[#2d2d2d]">name</Text>
          <Text className="text-base text-[#2d2d2d]">eamil</Text>
          <Text className="text-base text-[#2d2d2d]">phone</Text>
        </View>
        <View>
          <TouchableOpacity className=" bg-blue-500 rounded-md py-3 px-5">
            <Text className="text-2xl font-bold text-center text-white">
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className=" bg-red-500 rounded-md py-3 px-5">
            <Text className="text-2xl font-bold text-center text-white">
              delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FirestoreUsers;
