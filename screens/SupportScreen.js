import React, { useEffect } from 'react';
import { View, Text, Linking, Button, Pressable } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { useDynamicStyles } from '../hooks/SupportScreenStyles';

const SupportScreen = () => {
  const styles = useDynamicStyles();
  const navigation = useNavigation(); 

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Data provided by <Text style={styles.linkText} onPress={() => Linking.openURL('https://www.weatherapi.com/')}>Weather API</Text>. Best efforts are taken to ensure accuracy of the data, but no guarantees are made. To view the official data, please visit the website of </Text>
    <Text style={styles.text}>.</Text>
    
     <Pressable>
      <Text
      style={styles.goBack} 
      title="Go Back" 
      onPress={() => navigation.goBack()} >Go Back</Text>
     </Pressable>
  </View>

  );
};

export default SupportScreen;
