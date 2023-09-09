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
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#234567',
    zIndex: 1,
    maxHeight: 120,
    elevation: 5, 
  },
  navBarLandscape: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    padding: 20,
    backgroundColor: '#234567',
    zIndex: 1,
    maxWidth: 160,
    elevation: 5, 
  },
  btn: {
    width: isLandscape ? 120 : 80,
    height: getActualFontSize(50, fontSizeType),
    backgroundColor: '#eeeeff',
    textAlign: 'center',
    borderRadius: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: '#9999ff',
    fontSize: getActualFontSize(25, fontSizeType),
    marginVertical: isLandscape ? 10 : 0, 
  },
  title: {
    fontSize: getActualFontSize(isLandscape ? 18 : 22, fontSizeType),
    textAlign: 'center',
    padding: 0,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: isLandscape ? 10 : 0, 
  },
});

return dynamicStyles;
};