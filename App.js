import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextSizeProvider } from './context/TextSizeContext';
import { TemperatureProvider } from './context/TemperatureContext';
import { SoundEffectsProvider } from './context/SoundEffectsContext';

import MainWeatherScreen from './screens/MainWeatherScreen';
import CitySearchScreen from './screens/CitySearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import SupportScreen from './screens/SupportScreen';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const Stack = createStackNavigator();

export default function App() {
  return (
    <TemperatureProvider>
      <TextSizeProvider>
      <SoundEffectsProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainWeatherScreen">
            <Stack.Screen name="MainWeatherScreen" component={MainWeatherScreen} />
            <Stack.Screen name="CitySearchScreen" component={CitySearchScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="SupportScreen" component={SupportScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        </SoundEffectsProvider>
      </TextSizeProvider>
    </TemperatureProvider>
  );
}
