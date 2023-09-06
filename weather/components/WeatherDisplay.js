// components/WeatherDisplay.js
import React from 'react';
import { useTemperature } from '../context/TemperatureContext';
import { View, Text, Image } from 'react-native';
import { useDynamicStyles } from '../hooks/WeatherDisplayStyles';

const WeatherDisplay = ({ cityName, countryName, temperatureC, temperatureF, weatherDescription, iconURL, dateAndTime }) => {
  const { unit } = useTemperature();
  const styles = useDynamicStyles();

  const displayTemperature = unit === 'C' ? temperatureC : temperatureF;

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.city}>{cityName}</Text>
        <Text style={styles.country}>{countryName}</Text>
      </View>
      <View style={styles.cardBody}>
        <View style={styles.tempContainer}>
          <Image source={{ uri: iconURL }} style={styles.image} />
          <Text style={styles.temp}>{Math.floor(displayTemperature)}°{unit}</Text>
        </View>
        <View style={styles.tempInfo}>
          <Text style={styles.desc}>{weatherDescription}</Text>
          <Text style={styles.dateTime}>{dateAndTime}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherDisplay;
