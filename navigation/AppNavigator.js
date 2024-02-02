// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProspectosScreen from '../screens/Prospectos';
import ProspectosInfo from '../screens/views/ProspectosInfo'

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Login"  screenOptions={{
      headerStyle: {
        backgroundColor: '#4D69B4',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Inicio" component={ProfileScreen} />
      <Stack.Screen name="Prospectos" component={ProspectosScreen} />
      <Stack.Screen name="ProspectosInfo" component={ProspectosInfo} />

    </Stack.Navigator>

);