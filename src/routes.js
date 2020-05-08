import LandPage from './views/LandPage';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignIn from './views/SignIn';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Landpage">
      <Stack.Screen
        component={LandPage}
        name="Landpage"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={SignIn}
        name="Signin"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
