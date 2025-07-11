import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/tabBottom/Home';
import Earn from './src/screens/tabBottom/Earn';
import Delta from './src/screens/tabBottom/Delta';
import Task from './src/screens/tabBottom/Task';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const getIconBars = (routeName, focused, color, size) => {
  let iconName;
  if (routeName === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'Earn') {
    iconName = focused ? 'cash' : 'cash-outline';
  } else if (routeName === 'Delta') {
    iconName = focused ? 'pulse' : 'pulse-outline';
  } else if (routeName === 'Task') {
    iconName = focused ? 'list' : 'list-outline';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) =>
            getIconBars(route.name, focused, color, size),
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'blue',
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: 'Georgia',
            fontWeight: 700,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Earn" component={Earn} />
        <Tab.Screen name="Delta" component={Delta} />
        <Tab.Screen
          name="Task"
          component={Task}
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              color: 'black',
              backgroundColor: 'yellow',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
