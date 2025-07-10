import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screens/drawer/Home';
import Profile from './src/screens/drawer/Profile';
import Career from './src/screens/drawer/Career';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: 'red',
          drawerActiveBackgroundColor: '#003CB3',
          drawerLabelStyle: {
            fontSize: 20,
          },
          drawerItemStyle: {
            backgroundColor: '#9dd3c8',
            borderColor: 'black',
            borderWidth: 2,
            opacity: 0.6,
            marginBottom: 10,
            borderRadius: 2,
          },
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Career" component={Career} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
