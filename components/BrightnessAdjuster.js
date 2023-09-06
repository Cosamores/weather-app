import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import * as Brightness from 'expo-brightness';
import { useDynamicStyles } from '../hooks/BrightnessAdjusterStyles';

const SLIDER_MIN_VALUE = 0;
const SLIDER_MAX_VALUE = 1;
const SLIDER_STEP = 0.1;

const BrightnessAdjuster = () => {
  const [brightnessValue, setBrightnessValue] = useState(0.5);
  const [isLoading, setIsLoading] = useState(true);
  const styles = useDynamicStyles();
  
  useEffect(() => {
    const fetchBrightness = async () => {
      try {
        const { brightness } = await Brightness.getBrightnessAsync();
        setBrightnessValue(brightness);
      } catch (error) {
        console.error("Error fetching brightness:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchBrightness();
  }, []);
  
  const handleBrightnessChange = async (value) => {
    try {
      await Brightness.setBrightnessAsync(value);
      setBrightnessValue(value);
    } catch (error) {
      console.error("Error setting brightness:", error);
    }
  };

  if (isLoading) {
    return <Text style={styles.loading}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set the screen Brightness:</Text>
      <Slider 
        style={styles.slider}
        value={brightnessValue}
        onValueChange={handleBrightnessChange}
        minimumValue={SLIDER_MIN_VALUE}
        maximumValue={SLIDER_MAX_VALUE}
        step={SLIDER_STEP}
        minimumTrackTintColor="#1EB15f"
        maximumTrackTintColor="#D3D3D1"
        thumbTintColor="#56789f"
      />
    </View>
  );
};

export default BrightnessAdjuster;
