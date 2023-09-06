// components/TextSizeSelector.js
import React from 'react';
import { useTextSize } from '../context/TextSizeContext';
import { View, Text, Button, Pressable } from 'react-native';
import { useDynamicStyles } from '../hooks/TextSizeSelectorStyles';

const TextSizeSelector = () => {
  const { fontSizeType, toggleFontSize, getActualFontSize } = useTextSize();
  
  const styles = useDynamicStyles();

  let buttonTitle;
  switch (fontSizeType) {
    case 'NORMAL':
      buttonTitle = "NORMAL";
      break;
    case 'LARGE':
      buttonTitle = "LARGE";
      break;
    case 'VERY LARGE':
      buttonTitle = "VERY LARGE";
      break;
    default:
      buttonTitle = "NORMAL";
  }

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Choose the font size</Text>
      </View>
      
      <View style={styles.options}>
        <Pressable 
          style={[styles.btnBox, styles.shadowProp]} 
          title={buttonTitle} 
          onPress={toggleFontSize} 
        ><Text style={[styles.btn, ]}>{buttonTitle}</Text></Pressable>
      </View>
    </View>
  );
};




export default TextSizeSelector;
