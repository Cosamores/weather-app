import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainWeatherScreen from './screens/MainWeatherScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import SettingsScreen from './screens/SettingsScreen';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainWeatherScreen">
          <Stack.Screen name="MainWeatherScreen" component={MainWeatherScreen} />
          <Stack.Screen name="CitySearchScreen" component={CitySearchScreen} />
          <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
