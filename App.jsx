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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/topTab/Home';
import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
import LoginScreen from './src/auth/Login';
import RegistrationScreen from './src/auth/Registration';
import ResetPasswordScreen from './src/auth/ResetPassword';
import Calls from './src/screens/topTab/Calls';
import Status from './src/screens/topTab/Status';
import { StatusBar, View } from 'react-native';
import { styles } from './src/style';
import { store } from './src/redux/store';
import Earn from './src/screens/topTab/Earn';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

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

        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: '#2d2d2d' },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'white',
            tabBarIndicatorStyle: styles.tabBarIndicatorStyles,
          }}
        >
          <Tab.Screen
            name="Main"
            component={MainStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
              tabBarLabel: 'Home',
            }}
          />
          <Tab.Screen name="Calls" component={Calls} />
          <Tab.Screen name="Earn" component={Earn} />
          <Tab.Screen name="Status" component={Status} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{ title: 'About' }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ title: 'Registration' }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ title: 'Password Reset' }}
      />
    </Stack.Navigator>
  );
};
export default App;
