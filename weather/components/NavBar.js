// components/NavBar.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NavBar = ({ navigateToSettings, navigateToSearch }) => {
  return (
    <View style={styles.navBar}>
      <Button title="⚙️" onPress={navigateToSettings} />
      <Button title="🔍" onPress={navigateToSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: '#fff',
    zIndex: 1
  }
});

export default NavBar;
