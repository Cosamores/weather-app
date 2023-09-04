import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const hardCodeCityName = 'sydney';
const hardCodeCountryName = 'australia';
const apiKey = 'ad7d9b1584c14ff2842100245220803';
const cityWeatherUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${hardCodeCityName},${hardCodeCountryName}&aqi=no`;

export default function App() {
  const [cityName, setCityName] = useState();
  const [countryName, setCountryName] = useState();
  const [temperature, setTemperature] = useState();
  const [weatherData, setWeatherData] = useState([]);  
  const [dateAndTime, setDateAndTime] = useState();

  useEffect(()=>{
    fetch(cityWeatherUrl)
    .then(response => response.json())
    .then(cityWeatherData => {
      setCityName(cityWeatherData.location.name)
      setCountryName(cityWeatherData.location.country)
      setTemperature(cityWeatherData.current.temp_c)
      setWeatherData(cityWeatherData.current.condition)
      setDateAndTime(cityWeatherData.location.localtime)            
    }, [])
  })
  return (
    <View style={styles.container}>
       <Text>city: {cityName}</Text>
       <Text>country: {countryName}</Text>
       <Text>temperature: {temperature}°C</Text>
       <Text>weather description: {weatherData.text}</Text>
       <Text>weather icon:</Text>
       <Image style={styles.image} source={{uri: `https:${weatherData.icon}`}} />
       <Text>date and time: {dateAndTime}</Text>
       {/*<Text>cityWeatherUrl: {cityWeatherUrl}</Text>*/}

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
