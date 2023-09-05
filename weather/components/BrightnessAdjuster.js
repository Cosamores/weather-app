import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Brightness from 'expo-brightness';

const BrightnessAdjuster = () => {
  const [currentBrightness, setCurrentBrightness] = useState(0.5);

  useEffect(() => {
    // Fetch the current brightness when the component mounts
    const fetchBrightness = async () => {
      const brightness = await Brightness.getBrightnessAsync();
      setCurrentBrightness(brightness);
    };

    fetchBrightness();
  }, []);

  const handleBrightnessChange = async (value) => {
    // Set the brightness in the state
    setCurrentBrightness(value);
    // Update the system brightness
    await Brightness.setBrightnessAsync(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Screen Brightness:</Text>
      <Slider 
        style={styles.slider}
        value={currentBrightness}
        onValueChange={handleBrightnessChange}
        minimumValue={0}
        maximumValue={1}
        step={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 12
  },
  label: {
    padding: 10,
    margin: 3
  },
});

export default BrightnessAdjuster;
