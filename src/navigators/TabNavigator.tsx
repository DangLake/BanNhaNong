
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
    const Tab = createBottomTabNavigator;
  return (
    <Tab.Nagivator> screenOptions={{
        headerShown: false,
      }}
        <Tab.Screen name="HomeScreen" component={HomeScreen}/>
      </Tab.Nagivator>
  );
};

export default TabNavigator;
