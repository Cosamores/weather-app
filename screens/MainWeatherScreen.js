import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useTemperature } from '../context/TemperatureContext';
import { useSoundEffects } from '../context/SoundEffectsContext';
import { useDynamicStyles } from '../hooks/MainWeatherScreenStyles';
import NavBar from '../components/NavBar';
import WeatherDisplay from '../components/WeatherDisplay';


export default function MainWeatherScreen({ navigation, route }) {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const { unit } = useTemperature();
  const styles = useDynamicStyles();
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  const { soundEffectsEnabled } = useSoundEffects();
  
  const playSoundEffect = async () => {
    if (soundEffectsEnabled) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/notification.wav')
      );
      await sound.playAsync();
    }
  };
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    return () => {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    };
  }, []);

  useEffect(() => {
    if (route.params?.newCityWeather) {
      setCitiesWeather(prevCities => {
        playSoundEffect(); 
        console.log("citiesWeather state:", citiesWeather);
        console.log("temperatureUnit from context:", unit);
        console.log("Adding new city weather:", route.params.newCityWeather);
        return [...prevCities, route.params.newCityWeather];
      });
    }
  }, [route.params?.newCityWeather]);


  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.hiddenItem}>
      <TouchableOpacity
        style={{ backgroundColor: '#ff005f', width: 100, height: '90%', maxHeight: isLandscape ? 80 : '90%', alignItems: 'center', justifyContent: 'center', borderTopRightRadius:30, borderBottomRightRadius: 30 }}
        onPress={() => deleteCity(data.index, rowMap)}
      >
        <Text style={styles.deleteBtn}>Delete</Text>
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
    playSoundEffect();
    newCitiesWeather.splice(cityIndex, 1);
    setCitiesWeather(newCitiesWeather);
    if (rowMap[cityIndex]) {
      rowMap[cityIndex].closeRow();
    }
  };
  
  const renderWelcomeMessage = () => {
    return (
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>Welcome to Weather Time!</Text>
        <Text style={styles.welcomeText}>Press {isLandscape ? "'Add city'" : "+"} to add cities from around the world to view their date, time, and weather.</Text>
        <Text style={styles.welcomeText}>Press {isLandscape ? "'Settings'" : "⚙️"} for settings. Settings enables the user to select unit of temperature, text size, sound effects, and brightness.</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar 
        navigateToSettings={() => navigation.navigate('SettingsScreen')}
        navigateToSearch={() => navigation.navigate('CitySearchScreen')}
      />
      {citiesWeather.length === 0 ? renderWelcomeMessage() : (
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
      )}
    </View>
  );
}
