import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../style';

const Home = ({ route }) => {
  const navigation = useNavigation();
  const { users } = route.params;
  console.log('====================================');
  console.log(users);
  console.log('====================================');
  return (
    <View style={[styles.paddings, { flex: 1 }]}>
      <View style={styles.card}>
        <Text style={{ fontSize: 20 }}>{users.name}</Text>
        <Text style={{ fontSize: 20 }}>{users.email}</Text>
      </View>

      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;
