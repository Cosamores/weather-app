// components/Help.js
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDynamicStyles } from '../hooks/HelpStyles';

const Help = () => {
  const styles = useDynamicStyles();
  const navigation = useNavigation(); 

  return (
    <Pressable onPress={() => navigation.navigate('SupportScreen')}>

    <View style={styles.container}>
      <Text style={styles.title}>Weather Time</Text>
      <Text style={styles.subtitle}>(c) 2023 ABC Solutions Pty Ltd.</Text>
      <Text style={styles.text}>Version: 1.0</Text>
      <Text style={styles.text}>Last update: 9 September 2023</Text>
      <Text style={styles.text}>Build date: 9 september 2023</Text>
      <Text style={styles.text}>Developer: Diego Soares</Text>
      <Text style={styles.text}>Student number: 123456</Text>
    </View>
    </Pressable>

  );
};

export default Help;
