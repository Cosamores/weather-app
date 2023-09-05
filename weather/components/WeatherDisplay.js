// components/WeatherDisplay.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherDisplay = ({ cityName, countryName, temperature, weatherDescription, iconURL, dateAndTime }) => {

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={dynamicStyles.city}>{cityName}</Text>
        <Text style={dynamicStyles.country}>{countryName}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.tempContainer}>
          <Image source={{ uri: iconURL }} style={styles.image} />
          <Text style={dynamicStyles.temp}>{Math.floor(temperature)}°C</Text>
        </View>
        <View style={styles.tempInfo}>
          <Text style={styles.desc}>{weatherDescription}</Text>
          <Text style={styles.dateTime}>{dateAndTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    margin: 10
    
  },

  cardBody: {
    flexDirection: 'column'
  },

  city: {
    fontSize: 27,
    fontWeight: '700',
    letterSpacing: 1.2,
    fontSize: 27
  },

  country: {
    fontSize: 16,

  },

  tempContainer: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    margin: 10
  },

  tempInfo: {
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 9
  },  

  temp: {
 

  },
  image: {
    width: 50, 
    height: 50,
    padding: 0,
    margin: 0

  }
})


export default WeatherDisplay;
