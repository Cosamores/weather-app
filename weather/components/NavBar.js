// components/NavBar.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDynamicStyles } from '../hooks/NavBarStyles';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const NavBar = ({ navigateToSettings, navigateToSearch }) => {
  const styles = useDynamicStyles();
  const isLandscape = width > height;

  return (
    <View style={styles.navBar}>
      <Pressable title="⚙️" onPress={navigateToSettings} ><Text style={styles.btn}>⚙️</Text></Pressable>
      <Text style={styles.title}>{isLandscape ? 'Weather App' : 'Weather\nApp'}</Text>
      <Pressable title="🔍" onPress={navigateToSearch} ><Text style={styles.btn}>🔍</Text></Pressable>
    </View>
  );
};

export default NavBar;
