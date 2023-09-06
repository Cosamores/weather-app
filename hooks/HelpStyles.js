import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#f7f7f7',
      borderRadius: 5,
    },
    title: {
      fontSize: getActualFontSize(18, fontSizeType),
      fontWeight: 'bold',
    },
    subtitle: {
      marginTop: 5,
      fontSize: getActualFontSize(14, fontSizeType),
      color: '#888',
    },
    text: {
      marginTop: 10,
      fontSize: getActualFontSize(12, fontSizeType)
    },
  });

return dynamicStyles;

}