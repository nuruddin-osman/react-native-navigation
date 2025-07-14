import { View, Text, ImageBackground, Image, Button } from 'react-native';
import React from 'react';
import { styles } from '../../style';
import BgNatureImg from '../../assets/images/natural01.jpg';
import BgNatureImg2 from '../../assets/images/nature-train.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../../redux/slice/counterSlice';
import { useStores } from '../../zustand/store';

const Status = () => {
  const counters = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  const { increments, decrements, resets, bears } = useStores();
  return (
    <View className="relative">
      {/* <ImageBackground source={BgNatureImg}  className='h-full w-full object-cover' >
        <View className='flex justify-center items-center w-3/4 mx-auto'>
          <Text className='w-full  px-5 text-xl text-[#FFF]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati quis illum ratione est temporibus aliquam illo dolorem ab rerum nesciunt saepe, expedita maiores magni commodi architecto quod quia inventore!</Text>
          <Image source={BgNatureImg2} className='h-1/2 w-[300px] object-cover mt-10'/>
        </View>
          <Image source={BgNatureImg2} className='h-[200px] w-[200px] object-cover mt-10 absolute -top-10 right-0'/>
      </ImageBackground> */}
      <Text className="text-[80px]">{counters}</Text>
      <View className="flex flex-col gap-4 w-72 mx-auto">
        <Button title="couns" onPress={() => dispatch(increment())} />
        <Button title="Less" onPress={() => dispatch(decrement())} />
        <Button title="Reset" onPress={() => dispatch(reset())} />
      </View>
      <View className="flex flex-col gap-4 w-72 mx-auto bg-slate-500 m-6 p-5 rounded-md">
        <Text className="text-[80px]">{bears}</Text>
        <Button title="couns" onPress={increments} />
        <Button title="Less" onPress={decrements} />
        <Button title="Reset" onPress={resets} />
      </View>
    </View>
  );
};

export default Status;
