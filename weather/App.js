// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainWeatherScreen from './screens/MainWeatherScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';
import { TemperatureProvider } from './context/TemperatureContext';
import { TextSizeProvider } from './context/TextSizeContext';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const Stack = createStackNavigator();

export default function App() {
  return (
    <TemperatureProvider>
      <TextSizeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainWeatherScreen">
            <Stack.Screen name="MainWeatherScreen" component={MainWeatherScreen} />
            <Stack.Screen name="CitySearchScreen" component={CitySearchScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="SupportScreen" component={SupportScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TextSizeProvider>
    </TemperatureProvider>
  );
}
