import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  deleteData,
  readData,
  updateData,
  writeData,
} from '../../database/realtimeDatabase';

const FirestoreUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editId, setEditId] = useState(null);
  const [users, setUsers] = useState([]);

  const handleSubmit = async () => {
    const userDatas = { name, email, phone };

    try {
      if (editId) {
        await updateData(editId, userDatas);
      } else {
        await writeData(userDatas);
      }
      fetchUsers();
      setEditId(null);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  };
  const fetchUsers = async () => {
    try {
      const getdata = await readData();
      setUsers(getdata);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = async item => {
    setName(item.name);
    setEmail(item.email);
    setPhone(item.phone);
    setEditId(item.id);
  };
  const handleDelete = async id => {
    try {
      await deleteData(id);
      fetchUsers();
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="px-4 w-full">
      <View className="">
        <Text className="text-5xl font-bold text-orange-500 my-5 text-center">
          {editId ? 'Update' : 'New User'}
        </Text>
      </View>
      <View className="w-[90%] mx-auto bg-slate-300 p-5 flex flex-col gap-4 rounded-md">
        <TextInput
          placeholder="enter name"
          value={name}
          onChangeText={setName}
          keyboardType="text"
          className="px-5 py-3 border outline-none text-lg rounded-md border-blue-500 bg-white"
        />
        <TextInput
          placeholder="enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="px-5 py-3 border outline-none text-lg rounded-md border-blue-500 bg-white"
        />
        <TextInput
          placeholder="enter phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone"
          className="px-5 py-3 border outline-none text-lg rounded-md border-blue-500 bg-white"
        />
        <TouchableOpacity
          onPress={handleSubmit}
          className=" bg-orange-500 rounded-md py-3"
        >
          <Text className="text-2xl font-bold text-center">
            {editId ? 'Update' : 'Add user'}
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-10">
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View className="flex flex-row justify-between items-center my-2 p-3 bg-gray-100 rounded-md">
              <View>
                <Text className="text-base text-[#2d2d2d]">{item.name}</Text>
                <Text className="text-base text-[#2d2d2d]">{item.email}</Text>
                <Text className="text-base text-[#2d2d2d]">{item.phone}</Text>
              </View>
              <View className="flex flex-row gap-2">
                <TouchableOpacity
                  onPress={() => handleEdit(item)}
                  className="bg-blue-500 rounded-md py-2 px-4"
                >
                  <Text className="text-lg font-bold text-center text-white">
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDelete(item.id)}
                  className="bg-red-500 rounded-md py-2 px-4"
                >
                  <Text className="text-lg font-bold text-center text-white">
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }} // Add padding if needed
        />
      </View>
    </View>
  );
};

export default FirestoreUsers;
