import React from 'react';
import { View, TextInput } from 'react-native';
import { useDynamicStyles } from '../hooks/SearchBarStyles';

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
const styles = useDynamicStyles(); 

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={onSubmit} 
        placeholder="Search for a city..."
        returnKeyType="send" 
      />
    </View>
  );
};


export default SearchBar;
