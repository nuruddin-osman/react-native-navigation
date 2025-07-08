import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>
        Hello World! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Cumque, accusantium! Eveniet amet perferendis atque, fugit molestias
        deleniti ex laudantium error fugiat odio placeat perspiciatis labore,
        inventore neque officia hic nostrum! Magnam ad veniam odio dolore, velit
        et ex suscipit odit!
      </Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default Home;
