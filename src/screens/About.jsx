import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>About</Text>
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
        title="Home..."
      />
    </View>
  );
};

export default About;
