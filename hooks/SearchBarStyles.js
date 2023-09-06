import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      borderRadius: 25,
      margin: 20,
      elevation: 3,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    input: {
      flex: 1,
      padding: getActualFontSize(12, fontSizeType),
      margin: 0,
      fontSize: getActualFontSize(16, fontSizeType),
      backgroundColor: '#ffffff',
      borderRadius: 30
    },
  })
  return dynamicStyles;

}