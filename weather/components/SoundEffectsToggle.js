// components/SoundEffectsToggle.js
import React from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const SoundEffectsToggle = ({ soundEffects, setSoundEffects }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Turn ON sound Effects? </Text>
      <Switch
        style={styles.switch} 
        value={soundEffects}
        onValueChange={setSoundEffects}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    padding: 12,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent:'space-between'
  },
  label: {
    padding: 10,
    margin: 3
  },
  switch: {
    marginRight: 12
  }
})


export default SoundEffectsToggle;
