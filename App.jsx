import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/tabBottom/Home';
import Earn from './src/screens/tabBottom/Earn';
import Delta from './src/screens/tabBottom/Delta';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Earn" component={Earn} />
        <Tab.Screen name="Delta" component={Delta} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
