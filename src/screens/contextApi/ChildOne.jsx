import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { SomeContext } from './Parent';
import ChildTow from './ChildTow';

const ChildOne = () => {
  const { count, handleCount } = useContext(SomeContext);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Press me" onPress={handleCount} />
      <ChildTow />
    </View>
  );
};

export default ChildOne;
