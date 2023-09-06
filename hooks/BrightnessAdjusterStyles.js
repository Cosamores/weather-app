import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({
    container: {
      padding: 24,
      backgroundColor: '#f5f5f5',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    label: {
      margin: 3,
      marginBottom: 21,
      fontWeight: '500',
      textAlign: 'center',
      fontSize: getActualFontSize(16, fontSizeType),
    },
    slider: {
      width: '100%',
      paddingBottom: 60,
      margin: 'auto',

    },
    loading: {
      padding: 12,
      fontWeight: '700',
      fontSize: getActualFontSize(16, fontSizeType)
    }
  })
  return dynamicStyles;

}