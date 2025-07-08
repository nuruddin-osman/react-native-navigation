import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>About</Text>
      <Button
        onPress={() => navigation.push('Home')}
        title="Go to Details... again"
      />
      <Button
        onPress={() => navigation.popTo('Contacts')}
        title="Go to Contacts"
      />
    </View>
  );
};

export default About;
