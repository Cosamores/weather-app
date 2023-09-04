// components/TextSizeSelector.js
import React from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

const TextSizeSelector = ({ textSize, setTextSize }) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Choose the font size</Text>
      </View>
      
      <View style={styles.options}>
        <Button style={styles.btn} title="Normal" onPress={() => setTextSize('Normal')} />
        <Button style={styles.btn} title="Large" onPress={() => setTextSize('Large')} />
        <Button style={styles.btn} title="Extra Large" onPress={() => setTextSize('Extra Large')} />
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
export default TextSizeSelector;
