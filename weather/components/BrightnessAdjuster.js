// components/BrightnessAdjuster.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const BrightnessAdjuster = ({ brightness, setBrightness }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Screen Brightness:</Text>
      <Slider 
        style={styles.slider}
        value={brightness}
        onValueChange={setBrightness}
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
})
export default BrightnessAdjuster;
