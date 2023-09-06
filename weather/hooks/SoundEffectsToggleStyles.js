import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({
    container:{
      padding: 0,
      paddingBottom: 15,
      paddingTop: 15,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent:'space-between',
      marginTop: 21,
      borderTopWidth: .2,
      borderBottomWidth: .2,
      borderRadius: 30
    },
    label: {
      padding: 10,
      margin: 3,
      fontSize: getActualFontSize(16, fontSizeType),
      fontWeight: '500'
    },
    switch: {
      marginRight: 1
    }
  })
  return dynamicStyles;

}