import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

const width = Dimensions.get('window').width;

const WithTiming = () => {
  const offset = useSharedValue(width / 2 - 160);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, { duration: 1750 }),
      -1,
      true,
    );
  }, []);
  return (
    <View style={{ marginTop: 80 }}>
      <Animated.View style={[styles.box, animatedStyles]} />
    </View>
  );
};

export default WithTiming;

const styles = StyleSheet.create({
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});
