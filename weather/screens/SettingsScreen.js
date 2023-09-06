import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import TemperatureUnitSelector from '../components/TemperatureUnitSelector';
import TextSizeSelector from '../components/TextSizeSelector';
import SoundEffectsToggle from '../components/SoundEffectsToggle';
import BrightnessAdjuster from '../components/BrightnessAdjuster';
import Help from '../components/Help'; 
import * as ScreenOrientation from 'expo-screen-orientation';

const SettingsScreen = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);

  return (
    <ScrollView style={{ flex: 1 }}>
      <TemperatureUnitSelector />
      <TextSizeSelector />
      <SoundEffectsToggle />
      <BrightnessAdjuster />
      <Help />
    </ScrollView>
  );
};

export default SettingsScreen;
