// components/TextSizeSelector.js
import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import TextSizeContext from '../context/TextSizeContext'; // Import the context

const TextSizeSelector = () => {
  // Use the context to get the textSize and its setter function
  const { textSize, setTextSize } = useContext(TextSizeContext);

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Choose the font size</Text>
      </View>
      
      <View style={styles.options}>
        <Button 
          style={styles.btn} 
          title="Normal" 
          onPress={() => setTextSize('Normal')} 
          color={textSize === 'Normal' ? 'blue' : 'gray'}
        />
        <Button 
          style={styles.btn} 
          title="Large" 
          onPress={() => setTextSize('Large')} 
          color={textSize === 'Large' ? 'blue' : 'gray'}
        />
        <Button 
          style={styles.btn} 
          title="Extra Large" 
          onPress={() => setTextSize('Extra Large')} 
          color={textSize === 'Extra Large' ? 'blue' : 'gray'}
        />
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
});

export default TextSizeSelector;
