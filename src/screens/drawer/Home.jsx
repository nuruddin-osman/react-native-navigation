import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};
export default Home;
