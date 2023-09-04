// components/TemperatureUnitSelector.js
import React from 'react';
import { View, SectionList, Text, StyleSheet, Button } from 'react-native';

const TemperatureUnitSelector = ({ unit, setUnit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Choose you preferred measurement unit</Text>
       </View>
      <View style={styles.options}>
        <Button style={styles.btn} title="Celsius" onPress={() => setUnit('C')} />
        <Button style={styles.btn} title="Fahrenheit" onPress={() => setUnit('F')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12
  },
  label: {
    padding: 10,
    margin: 3
  },
  options: {
    padding: 12,
    display: 'flex',
    gap: 3
  },
  btn: {
    
  }
})
export default TemperatureUnitSelector;
