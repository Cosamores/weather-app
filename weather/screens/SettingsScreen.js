import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import TemperatureUnitSelector from '../components/TemperatureUnitSelector';
import TextSizeSelector from '../components/TextSizeSelector';
import SoundEffectsToggle from '../components/SoundEffectsToggle';
import BrightnessAdjuster from '../components/BrightnessAdjuster';
import TextSizeContext from '../context/TextSizeContext'; // Import the context

const SettingsScreen = () => {
  const [temperatureUnit, setTemperatureUnit] = useState('Celsius');
  const [soundEffects, setSoundEffects] = useState(true);
  const [brightness, setBrightness] = useState(0.5);

  // Use the context to get the text size and its setter function
  const { textSize, setTextSize } = useContext(TextSizeContext);

  return (
    <View>
      <TemperatureUnitSelector 
        temperatureUnit={temperatureUnit}
        setTemperatureUnit={setTemperatureUnit}
      />
      <TextSizeSelector />
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
