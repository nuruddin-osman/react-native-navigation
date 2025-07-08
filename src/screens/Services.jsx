import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Services = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Services</Text>
      <Button onPress={() => navigation.popToTop('')} title="Go to Home" />
    </View>
  );
};

export default Services;
