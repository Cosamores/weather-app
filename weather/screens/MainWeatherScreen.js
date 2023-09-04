import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import NavBar from '../components/NavBar';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import WeatherDisplay from '../components/WeatherDisplay';

export default function MainWeatherScreen({ navigation, route }) {
  const [citiesWeather, setCitiesWeather] = useState([]);
  useEffect(() => {
    if (route.params?.newCityWeather) {
      setCitiesWeather(prevCities => {
        console.log("Adding new city weather:", route.params.newCityWeather);
        return [...prevCities, route.params.newCityWeather];
      });
    }
  }, [route.params?.newCityWeather]);
  

  const deleteCity = (cityIndex) => {
    const newCitiesWeather = [...citiesWeather];
    newCitiesWeather.splice(cityIndex, 1);
    setCitiesWeather(newCitiesWeather);
  };

  const renderCity = ({ item }) => {
    if (item && item.location && item.current) {
        return (
            <WeatherDisplay 
              cityName={item.location.name}
              countryName={item.location.country}
              temperature={item.current.temp_c}
              weatherDescription={item.current.condition.text}
              iconURL={`https:${item.current.condition.icon}`}
              dateAndTime={item.location.localtime}
            />
        );
    }
    return null; // or a placeholder component if you prefer
};


  return (
    <View style={styles.container}>
      <NavBar 
        navigateToSettings={() => navigation.navigate('SettingsScreen')}
        navigateToSearch={() => navigation.navigate('CitySearchScreen')}
      />
      <FlatList 
        style={styles.card}
        data={citiesWeather.filter(city => city)}
        renderItem={renderCity}
        keyExtractor={(item) => item.location?.name || ''}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 0,
  },
  image: {
    resizeMode: 'contain',
    flex: 0.1,
    aspectRatio: 1,
    backgroundColor: '#ffffff'
  },
  card: {
    marginTop:50,
  }
});
