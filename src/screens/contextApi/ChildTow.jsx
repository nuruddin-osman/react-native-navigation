import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { SomeContext } from './Parent'

const ChildTow = () => {
     const {count, handleCountDecr} = useContext(SomeContext)
  return (
    <View>
            <Button title='Press me' onPress={handleCountDecr}/>
    </View>
  )
}

export default ChildTow