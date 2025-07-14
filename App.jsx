import React from 'react';
import './global.css';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './src/screens/tabBottom/Home';
// import Earn from './src/screens/tabBottom/Earn';
// import Delta from './src/screens/tabBottom/Delta';
// import Task from './src/screens/tabBottom/Task';
// import Icon from 'react-native-vector-icons/Ionicons';

// const Tab = createBottomTabNavigator();
// const getIconBars = (routeName, focused, color, size) => {
//   let iconName;
//   if (routeName === 'Home') {
//     iconName = focused ? 'home' : 'home-outline';
//   } else if (routeName === 'Earn') {
//     iconName = focused ? 'cash' : 'cash-outline';
//   } else if (routeName === 'Delta') {
//     iconName = focused ? 'pulse' : 'pulse-outline';
//   } else if (routeName === 'Task') {
//     iconName = focused ? 'list' : 'list-outline';
//   }
//   return <Icon name={iconName} size={size} color={color} />;
// };
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './src/screens/topTab/Home';
import Calls from './src/screens/topTab/Calls';
import Status from './src/screens/topTab/Status';
import { StatusBar, View } from 'react-native';
import { styles } from './src/style';
import { store } from './src/redux/store';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            backgroundColor: '#8000ff',
          }}
        >
          <StatusBar
            animated={true}
            barStyle="light-content"
            hidden={false}
            translucent={true}
            showHideTransition="fade"
          />
        </View>
        {/* <Tab.Navigator
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
      </Tab.Navigator> */}
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: '#2d2d2d' },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'white',
            tabBarIndicatorStyle: styles.tabBarIndicatorStyles,
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Calls" component={Calls} />
          <Tab.Screen
            name="Status"
            component={Status}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Icon
                  name={focused ? 'ellipse-outline' : 'ellipse'}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
