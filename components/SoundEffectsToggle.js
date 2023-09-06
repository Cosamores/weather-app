import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { View, Switch, Text } from 'react-native';
import { useDynamicStyles } from '../hooks/SoundEffectsToggleStyles';

const SoundEffectsToggle = () => {
  const styles = useDynamicStyles();
  const [soundEffects, setSoundEffects] = useState(false); // Local state
  const [sound, setSound] = useState();

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); 
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/notification.wav')
    );
    setSound(sound);
    await sound.playAsync(); 
  }

  const handleToggle = async (value) => {
    setSoundEffects(value);
    if (value) {
      await playSound();
    } else {
      if (sound) {
        await sound.stopAsync();
        await sound.unloadAsync(); // Ensure the sound is unloaded when turned off
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Turn ON sound Effects? </Text>
      <Switch
        style={styles.switch} 
        value={soundEffects}
        onValueChange={handleToggle}
      />
    </View>
  );
};

export default SoundEffectsToggle;
