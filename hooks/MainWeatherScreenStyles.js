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
  backgroundColor: '#4444ff'
},
image: {
  resizeMode: 'contain',
  flex: 0.1,
  aspectRatio: 1,
  backgroundColor: '#ffffff'
},
card: {
  marginTop: getActualFontSize(isLandscape ? 60 : 90, fontSizeType),
},
hiddenItem: {
  flex: 1,
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'right'
},
deleteBtn: {
  color: 'white',
  fontWeight: '700', textAlign: 'right',
},
welcomeContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  backgroundColor: '#f7f7f7',
  borderRadius: 10,
  margin: 10,
  marginTop: isLandscape ? 20 : 100,
  marginLeft: isLandscape ? 180 : 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  maxHeight: isLandscape ? 420 : 450
},

welcomeTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  color: '#333',
},

welcomeText: {
  fontSize: 16,
  textAlign: 'center',
  marginBottom: 10,
  color: '#555',
},
})
return dynamicStyles;

}