import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CollapsibleCard from '../components/cardPeriod';

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="CartaP" component={CollapsibleCard}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>

);
