import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';
import { styles } from '../../style';
import ChildOne from './ChildOne';
export const SomeContext = createContext();

const Parent = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const handleCountDecr = () => {
    setCount(count - 1);
  };
  return (
    <View style={styles.containers}>
      <SomeContext.Provider value={{ count, handleCount, handleCountDecr }}>
        <ChildOne />
      </SomeContext.Provider>
    </View>
  );
};

export default Parent;
