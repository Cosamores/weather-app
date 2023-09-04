// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainWeatherScreen from './screens/MainWeatherScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainWeather">
        <Stack.Screen name="MainWeather" component={MainWeatherScreen} />
        <Stack.Screen name="CitySearch" component={CitySearchScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
