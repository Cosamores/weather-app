import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import NavBar from '../components/NavBar';
import WeatherDisplay from '../components/WeatherDisplay';
import { useTemperature } from '../context/TemperatureContext';
import { useDynamicStyles } from '../hooks/MainWeatherScreenStyles';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SwipeListView } from 'react-native-swipe-list-view';

export default function MainWeatherScreen({ navigation, route }) {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const { unit } = useTemperature();
  const styles = useDynamicStyles();
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);

  useEffect(() => {
    if (route.params?.newCityWeather) {
      setCitiesWeather(prevCities => {
        console.log("citiesWeather state:", citiesWeather);
        console.log("temperatureUnit from context:", unit);
        console.log("Adding new city weather:", route.params.newCityWeather);
        return [...prevCities, route.params.newCityWeather];
      });
    }
  }, [route.params?.newCityWeather]);


  const renderHiddenItem = (data, rowMap) => (
    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
      <TouchableOpacity
        style={{ backgroundColor: '#ff005f', width: 75, height: '90%', maxHeight: isLandscape ? 80 : '90%', alignItems: 'center', justifyContent: 'center', borderTopRightRadius:30, borderBottomRightRadius: 30 }}
        onPress={() => deleteCity(data.index, rowMap)}
      >
        <Text style={{ color: 'white',  fontWeight: '700' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
  

  const renderCity = ({ item }) => {
    if (item && item.location && item.current) {
        return (
            <WeatherDisplay 
              cityName={item.location.name}
              countryName={item.location.country}
              temperatureC={item.current.temp_c}
              temperatureF={item.current.temp_f}
              weatherDescription={item.current.condition.text}
              iconURL={`https:${item.current.condition.icon}`}
              dateAndTime={item.location.localtime}
            />
        );
    }
    return null; 
  };
  const handleRowDidOpen = (rowKey, rowMap) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  
  const deleteCity = (cityIndex, rowMap) => {
    const newCitiesWeather = [...citiesWeather];
    newCitiesWeather.splice(cityIndex, 1);
    setCitiesWeather(newCitiesWeather);
    if (rowMap[cityIndex]) {
      rowMap[cityIndex].closeRow();
    }
  };
  
  return (
    <View style={styles.container}>
      <NavBar 
        navigateToSettings={() => navigation.navigate('SettingsScreen')}
        navigateToSearch={() => navigation.navigate('CitySearchScreen')}
      />
      <SwipeListView 
        style={styles.card}
        data={citiesWeather.filter(city => city)}
        renderItem={renderCity}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        stopRightSwipe={-75}
        onRowDidOpen={(rowKey, rowMap) => handleRowDidOpen(rowKey, rowMap)}
        keyExtractor={(item) => item.location?.name + item.location?.localtime || item.location?.localtime}
      />

    </View>
  );
}
