// hooks/useDynamicStyles.js
import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet, Dimensions } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  
  const dynamicStyles = StyleSheet.create({
    card: {
      borderWidth: 2,
      borderRadius: isLandscape ? 30 : 12,
      padding: isLandscape ? 8 : 12,
      display: 'flex',
      flexDirection: isLandscape ?'row' : 'column',
      backgroundColor: '#ffffff',
      margin: 10,
      maxHeight: isLandscape ? getActualFontSize(150, fontSizeType) : 'unset'
    },
  
    cardBody: {
      flexDirection: isLandscape ? 'row-reverse' : 'column',
      justifyContent: 'space-around'
    },
  
    city: {
      fontWeight: '700',
      letterSpacing: 1.2,
      fontSize: getActualFontSize(isLandscape ? 20 : 25, fontSizeType),
      padding: isLandscape ? 6 : 0
    },
  
    country: {
      fontSize:getActualFontSize(16, fontSizeType),
      padding: isLandscape ? 6 : 0

    },
  
    tempContainer: {
      height: 'auto',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      margin: isLandscape ? 0 : 10,
    
    },
  
    tempInfo: {
      padding: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 9,
    },  
    desc: {
      fontSize:getActualFontSize(16, fontSizeType),

    },
    dateTime: {
      fontSize:getActualFontSize(16, fontSizeType),

    },
    temp: {
      fontSize: getActualFontSize(isLandscape ? 50 : 60, fontSizeType),
      padding: 0,
      textAlign: 'right',
    },
    image: {
      width: getActualFontSize(isLandscape ? 50 : 60, fontSizeType),
    height: getActualFontSize(isLandscape ? 50 : 60, fontSizeType), 
      padding: 0,
      margin: 0
  
    }
  });

  return dynamicStyles;
};
