import { View, Text } from 'react-native';
import React from 'react';
import { styles } from '../../style';
import Parent from '../contextApi/Parent';

const Calls = () => {
  return (
    <View style={styles.containers}>
      <Text style={styles.card}>Calls</Text>
      <Parent/>
    </View>
  );
};

export default Calls;
