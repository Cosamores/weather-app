import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet, Dimensions } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

const { width, height } = Dimensions.get('window');
const isLandscape = width > height;

  const dynamicStyles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: isLandscape ? 9 : 20,
      backgroundColor: '#fff',
      zIndex: 1,
      backgroundColor: '#234567',
      maxHeight: isLandscape ? 80 : 'unset'
      

    },
    btn: {
      width: 80,
      height: getActualFontSize(isLandscape ? 40 : 50, fontSizeType),
      backgroundColor: '#eeeeff',
      textAlign: 'center',
      borderRadius: 20,
      padding: 5,
      borderWidth: 2,
      borderColor: '#9999ff',
      fontSize: getActualFontSize(25, fontSizeType),
      top: 12,
    },
    title: {
      fontSize: getActualFontSize(isLandscape ? 20 : 24, fontSizeType),
      textAlign: 'center',
      padding: 12,
      fontWeight: 'bold',
      color: '#ffffff',
    }
  })
  return dynamicStyles;
}