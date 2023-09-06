import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    text: {
      fontSize: getActualFontSize(16, fontSizeType),
      color: '#333',
      textAlign: 'justify'

    },
    linkText: {
      fontSize: getActualFontSize(16, fontSizeType),
      color: 'blue',
      textDecorationLine: 'underline',
      padding:12
    },
    goBack: {
      backgroundColor: '#56789f',
      padding: 12,
      margin: 36,
      marginLeft: 48,
      width: 200,
      height: getActualFontSize(50, fontSizeType),
      textAlign: 'center',
      position: 'relative',
      color: '#ffffff',
      fontWeight: '700',
      borderRadius: 30,
      fontSize: getActualFontSize(18, fontSizeType)
    }
  });
  return dynamicStyles;
};

