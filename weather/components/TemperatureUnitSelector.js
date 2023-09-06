// components/TemperatureUnitSelector.js
import React from 'react';
import { useTemperature } from '../context/TemperatureContext';
import { View,  Text,  Pressable } from 'react-native';
import { useDynamicStyles } from '../hooks/TemperatureUnitSelectorStyles';

const TemperatureUnitSelector = () => {
  const { unit, toggleUnit } = useTemperature();
  const styles = useDynamicStyles();


  const buttonLabel = unit === 'C' ? 'CELSIUS' : 'FAHRENHEIT';

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose the measurement unit</Text>
      <Pressable
        style={styles.btnBox} 
        title={buttonLabel}
        onPress={toggleUnit}
      ><Text style={[styles.btn, styles.shadowProp]} >{buttonLabel}</Text></Pressable>
    </View>
  );
};

export default TemperatureUnitSelector;
