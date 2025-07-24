import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../style';

const Home = ({ route }) => {
  const navigation = useNavigation();
  const { users } = route?.params || {};
  return (
    <View style={[styles.paddings, { flex: 1 }]}>
      {users ? (
        <View style={styles.card}>
          <Text style={{ fontSize: 20 }}>{users.name}</Text>
          <Text style={{ fontSize: 20 }}>{users.email}</Text>
        </View>
      ) : (
        <Text>No user data found</Text>
      )}

      <View className="flex flex-col gap-5">
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('AboutScreen')}
        />
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('LoginScreen')}
        />
        <Button
          title="Go to Users"
          onPress={() => navigation.navigate('UsersScreen')}
        />
        <Button
          title="Go to realtime Users"
          onPress={() => navigation.navigate('UsersScreenRealTime')}
        />
      </View>
    </View>
  );
};

export default Home;
