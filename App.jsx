import React from 'react';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contacts from './src/screens/Contacts';
import Services from './src/screens/Services';
import Login from './src/screens/Login';
import { Alert, Button, StatusBar, View } from 'react-native';
import My from './src/components/My';

const Stack = createNativeStackNavigator();
const App = () => {
  const handleMy = () => <My />;

  // const headerRight = () => (
  //   <Button onPress={() => alert('This is a button!')} title="About" />
  // );
  // const headerLeft = () => (
  //   <Button onPress={() => alert('This is a button!')} title="Hello" />
  // );

  return (
    <NavigationContainer>
      <>
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

        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home' }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              // headerRight: headerRight,
              // headerLeft: headerLeft,
              headerTitle: handleMy,
            }}
          />
          <Stack.Screen
            name="Services"
            component={Services}
            options={{ title: 'Services' }}
          />
          <Stack.Screen
            name="Contacts"
            component={Contacts}
            options={{ title: 'Contacts' }}
          />
        </Stack.Navigator>
      </>
    </NavigationContainer>
  );
};

export default App;
