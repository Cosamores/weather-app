// components/CityList.js
import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';

const CityList = ({ cityList, selectCity }) => {
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

const styles = StyleSheet.create({

  itemContainer: {
    margin: 6,
    marginLeft: 30,
    marginRight: 30,
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0ef',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    overflow: 'scroll'
  },
  name: {
    margin: 0,
    padding: 9,
    marginLeft: 21,
  }
})



export default CityList;
