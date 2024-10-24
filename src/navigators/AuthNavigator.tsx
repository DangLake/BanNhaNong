import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
  return <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>;
};

export default AuthNavigator;
