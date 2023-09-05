import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const SoundEffectsToggle = ({ soundEffects, setSoundEffects }) => {
  const sound = new Audio.Sound();

  const playSound = async () => {
    try {
      await sound.unloadAsync();
      await sound.loadAsync(require('../assets/exclamation.wav'));
      await sound.playAsync();
    } catch (error) {
      console.error("Couldn't play the sound:", error);
    }
  };

  const handleToggle = (value) => {
    setSoundEffects(value);
    if (value) {
      playSound();
    }
  };

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

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    padding: 10,
    margin: 3
  },
  switch: {
    marginRight: 12
  }
});

export default SoundEffectsToggle;
