import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Contacts = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Contacts</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
      <Button
        onPress={() => navigation.popTo('Services')}
        title="Go to Services"
      />
    </View>
  );
};

export default Contacts;
