// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import TemperatureUnitSelector from '../components/TemperatureUnitSelector';
import TextSizeSelector from '../components/TextSizeSelector';
import SoundEffectsToggle from '../components/SoundEffectsToggle';
import BrightnessAdjuster from '../components/BrightnessAdjuster';

const SettingsScreen = () => {
  const [temperatureUnit, setTemperatureUnit] = useState('Celsius');
  const [textSize, setTextSize] = useState('Normal');
  const [soundEffects, setSoundEffects] = useState(true);
  const [brightness, setBrightness] = useState(0.5);

  return (
    <View>
      <TemperatureUnitSelector 
        temperatureUnit={temperatureUnit}
        setTemperatureUnit={setTemperatureUnit}
      />
      <TextSizeSelector 
        textSize={textSize}
        setTextSize={setTextSize}
      />
      <SoundEffectsToggle 
        soundEffects={soundEffects}
        setSoundEffects={setSoundEffects}
      />
      <BrightnessAdjuster 
        brightness={brightness}
        setBrightness={setBrightness}
      />
    </View>
  );
};

export default SettingsScreen;
