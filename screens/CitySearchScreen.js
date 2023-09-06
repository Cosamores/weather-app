
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import * as ScreenOrientation from 'expo-screen-orientation';

import CityList from '../components/CityList';
import SearchBar from '../components/SearchBar';

import { WEATHER_API_KEY, GEONAMES_USERNAME } from '@env';

const CitySearchScreen = () => {
  const [cityList, setCityList] = useState([]);
  const [filteredCityList, setFilteredCityList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);
  
  useEffect(() => {
    async function fetchCities() {
      // Get permission for location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      // Get the user's location
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      try {
        const response = await fetch(`http://api.geonames.org/citiesJSON?north=${latitude + 1}&south=${latitude - 1}&east=${longitude + 1}&west=${longitude - 1}&lang=de&username=${GEONAMES_USERNAME}`);
        const data = await response.json();
        setCityList(data.geonames);
        setFilteredCityList(data.geonames);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    }

    fetchCities();
  }, []);
  
  useEffect(() => {
    if (searchQuery) {
      const filtered = cityList.filter(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) {
        setFilteredCityList(filtered);
      } else {
        fetchWeatherDataForInputCity(searchQuery);
        console.log(searchQuery)
      }
    } else {
      setFilteredCityList(cityList);
    }
  }, [searchQuery, cityList]);
  

  const fetchWeatherData = async (cityName) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchWeatherDataForInputCity = async (cityName) => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data for input city:', error);
      return null;
    }
  };

  const selectCity = async (city) => {
    let weatherData;
    if (city.location) {
      // If the city is from the fetched list
      weatherData = await fetchWeatherData(city.name);
    } else {
      // If the city is directly input by the user
      weatherData = await fetchWeatherDataForInputCity(city.name || searchQuery);
      // Ensure the data structure matches the expected format
      if (weatherData && !weatherData.location) {
        weatherData = {
          location: {
            name: city.name || searchQuery,
            country: weatherData.country || '', 
            localtime: weatherData.localtime || ''
          },
          current: weatherData.current || {}
        };
      }
    }
    if (weatherData && weatherData.location && weatherData.current) {
      navigation.navigate('MainWeatherScreen', { newCityWeather: weatherData });
    } else {
      console.error('Invalid weather data format:', weatherData);
    }
  };

  const handleSearchSubmit = async () => {
    if (searchQuery) {
      const weatherData = await fetchWeatherDataForInputCity(searchQuery);
      if (weatherData && weatherData.location) {
        setFilteredCityList([weatherData.location]);
      } else {
        setFilteredCityList([]);
      }
    }
  };
  
  return (
    <View style={{ flex: 1 }}>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onSubmit={handleSearchSubmit}
      />
      <CityList cityList={filteredCityList} selectCity={selectCity} />
    </View>
  );
};

export default CitySearchScreen;