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
    <View style={isLandscape ? styles.navBarLandscape : styles.navBar}>
      <Pressable title={isLandscape ? "Settings" : "⚙️"} onPress={navigateToSettings}>
        <Text style={styles.btn}>{isLandscape ? "Settings" : "⚙️"}</Text>
      </Pressable>
      <Text style={styles.title}>{isLandscape ? 'Weather Time' : 'Weather\nApp'}</Text>
      <Pressable title={isLandscape ? "Add City" : "+"} onPress={navigateToSearch}>
        <Text style={styles.btn}>{isLandscape ? "Add City" : "+"}</Text>
      </Pressable>
    </View>
  );
};

export default NavBar;