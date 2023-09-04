// SupportScreen.js
import React from 'react';
import { View, Text, Linking } from 'react-native';

const SupportScreen = () => {
  return (
    <View>
      <Text>Thank you for purchasing Weather Time. If you have any issues or feedback, please contact: 1800 123 456.</Text>
      <Text>Data provided by Weather API. Best efforts are taken to ensure accuracy of the data, but no guarantees are made. To view the official data, please visit the website of <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://providerwebsite.com')}>[Provider]</Text>.</Text>
    </View>
  );
};

export default SupportScreen;
