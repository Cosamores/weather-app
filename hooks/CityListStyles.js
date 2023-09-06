import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({
  
  itemContainer: {
    margin: 6,
    marginLeft: 30,
    marginRight: 30,
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0ef',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    overflow: 'scroll'
  },
  name: {
    margin: 0,
    padding: 9,
    marginLeft: 21,
    fontSize: getActualFontSize(16, fontSizeType)
  }
  })
  return dynamicStyles;

}