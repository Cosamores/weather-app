import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SoundEffectsProvider } from '../context/SoundEffectsContext';

import TemperatureUnitSelector from '../components/TemperatureUnitSelector';
import TextSizeSelector from '../components/TextSizeSelector';
import SoundEffectsToggle from '../components/SoundEffectsToggle';
import BrightnessAdjuster from '../components/BrightnessAdjuster';
import Help from '../components/Help'; 


const SettingsScreen = () => {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);

  return (      
  <SoundEffectsProvider>
    <ScrollView style={{ flex: 1 }}>
      <TemperatureUnitSelector />
      <TextSizeSelector />
        <SoundEffectsToggle />
     
      <BrightnessAdjuster />
      <Help />
    </ScrollView>
    </SoundEffectsProvider>
  );
};

export default SettingsScreen;
