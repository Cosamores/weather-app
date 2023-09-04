import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ searchQuery, setSearchQuery, onSubmit }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={onSubmit} // This will trigger when the user presses the submit button on the keyboard
        placeholder="Search for a city..."
        returnKeyType="send" // This changes the label of the submit button to "Send"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    margin: 20,
    elevation: 3, // for Android
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
  },
  input: {
    flex: 1,
    
    padding: 12,
    margin: 0,
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderRadius: 30
  },
});

export default SearchBar;
