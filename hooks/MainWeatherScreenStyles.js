import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet, Dimensions } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  
  const dynamicStyles = StyleSheet.create({

container: {
  flex: 1,
  padding: isLandscape ? 15 : 30,
  marginTop: 0,
},
image: {
  resizeMode: 'contain',
  flex: 0.1,
  aspectRatio: 1,
  backgroundColor: '#ffffff'
},
card: {
  marginTop: getActualFontSize(isLandscape ? 60 : 90, fontSizeType),
}
})
return dynamicStyles;

}