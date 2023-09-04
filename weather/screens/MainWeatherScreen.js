// screens/MainWeatherScreen.js
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const apiKey = 'ad7d9b1584c14ff2842100245220803';

export default function MainWeatherScreen() {
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();
  const [temperature, setTemperature] = useState();
  const [weatherData, setWeatherData] = useState([]);  
  const [dateAndTime, setDateAndTime] = useState();

  const cityWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName},${countryName}&aqi=no`;

  useEffect(()=>{
    fetch(cityWeatherUrl)
    .then(response => response.json())
    .then(cityWeatherData => {
      setCityName(cityWeatherData.location.name);
      setCountryName(cityWeatherData.location.country);
      setTemperature(cityWeatherData.current.temp_c);
      setWeatherData(cityWeatherData.current.condition);
      setDateAndTime(cityWeatherData.location.localtime);            
    });
  }, [cityName, countryName]);

  return (
    <View style={styles.container}>
       <Text>city: {cityName}</Text>
       <Text>country: {countryName}</Text>
       <Text>temperature: {temperature}°C</Text>
       <Text>weather description: {weatherData.text}</Text>
       <Text>weather icon:</Text>
       <Image style={styles.image} source={{uri: `https:${weatherData.icon}`}} />
       <Text>date and time: {dateAndTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100
  },
  image: {
    resizeMode: 'contain',
    flex: 0.1,
    aspectRatio: 1,
    backgroundColor: '#ffffff'
  }
});
