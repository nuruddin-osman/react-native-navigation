// src/hooks/useThemedTextStyle.js
import { useColorScheme } from 'react-native';

const useThemedTextStyle = () => {
  const colorScheme = useColorScheme();

  return {
    color: colorScheme === 'dark' ? 'white' : 'black',
  };
};

export default useThemedTextStyle;
