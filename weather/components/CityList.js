// components/CityList.js
import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { useTextSize } from '../context/TextSizeContext';
import { useDynamicStyles } from '../hooks/CityListStyles';

const CityList = ({ cityList, selectCity }) => {
  const { fontSizeType, toggleFontSize, getActualFontSize } = useTextSize();
  const styles = useDynamicStyles();

  return (
    <View>
      <FlatList 
        data={cityList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer} onPress={() => selectCity(item)}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id ? item.id.toString() : Math.random().toString()}
      />
    </View>
  );
};


export default CityList;
