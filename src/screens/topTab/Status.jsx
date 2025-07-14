import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import { styles } from '../../style';
import BgNatureImg from '../../assets/images/natural01.jpg' 
import BgNatureImg2 from '../../assets/images/nature-train.jpg' 

const Status = () => {
  return (
    <View className='relative'>
      <ImageBackground source={BgNatureImg}  className='h-full w-full object-cover' >
        <View className='flex justify-center items-center w-3/4 mx-auto'>
          <Text className='w-full  px-5 text-xl text-[#FFF]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta obcaecati quis illum ratione est temporibus aliquam illo dolorem ab rerum nesciunt saepe, expedita maiores magni commodi architecto quod quia inventore!</Text>
          <Image source={BgNatureImg2} className='h-1/2 w-[300px] object-cover mt-10'/>
        </View>
          <Image source={BgNatureImg2} className='h-[200px] w-[200px] object-cover mt-10 absolute -top-10 right-0'/>
      </ImageBackground>
    </View>
  );
};

export default Status;
