// hooks/useDynamicStyles.js
import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet, Dimensions } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;
  
  const dynamicStyles = StyleSheet.create({
    card: {
      borderWidth: 2,
      borderRadius: isLandscape ? 30 : 15,
      padding: isLandscape ? 8 : 12,
      display: 'flex',
      flexDirection: isLandscape ?'row' : 'column',
      backgroundColor: '#f9f0ff',
      margin: 10,
      maxHeight: isLandscape ? getActualFontSize(150, fontSizeType) : 'unset',
      elevation: 12,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  
    cardHeader: {
      backgroundColor: '#ffdf00',
      padding: 9,
      borderRadius: 21,
      borderStartWidth: 9,
      borderEndWidth: 9,
      borderStartColor: '#efef10', 
      borderEndColor: '#efef10',
      borderWidth: 2,
      borderTopColor: '#efef10',
      borderBottomColor: '#efef10',
      elevation: 4,
      margin: isLandscape ? 3 : 0


    },
    cardBody: {
      flexDirection: isLandscape ? 'row-reverse' : 'column',
      justifyContent: 'space-around',
      
      
    },
  
    city: {
      fontWeight: '700',
      letterSpacing: 1.2,
      fontSize: getActualFontSize(isLandscape ? 20 : 27, fontSizeType),
      padding: isLandscape ? 16 : 9,
      backgroundColor: '#f0d600',
      color: '#505050',
      borderRadius: 30,
      elevation: 2,
      textAlign: 'center',
      borderEndColor: '#f5da06',
      borderStartColor: '#f5da06',
      borderEndWidth: 9,
      borderStartWidth: 12,
      borderTopWidth: 3,
      borderBottomWidth: 3,
      borderColor: '#f5da06',

    },
  
    country: {
      fontSize:getActualFontSize(16, fontSizeType),
      padding: isLandscape ? 6 : 0,
      paddingTop: isLandscape ? 6 : 12,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      textAlign: 'center',
      fontStyle: 'italic',
      letterSpacing: 1.2

    },
  
    tempContainer: {
      height: 'auto',
      flexDirection: 'row',
      justifyContent:'space-evenly',
      margin: isLandscape ? 3 : 0,
      backgroundColor: isLandscape ? '#00eedd' : 'transparent',
      padding: isLandscape ? 9 : 'unset',
      borderRadius: 12,
      paddingRight: 24,
      marginTop: isLandscape ? 3 : 12,
      marginBottom: isLandscape ? 3 : 12 
 
    },
  
    tempInfo: {
      padding: 10,
      margin: isLandscape ? 6 : 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 9,
      backgroundColor: '#99aaff',
      borderRadius: 50,
      borderStartWidth: 12,
      borderEndWidth: 12,
      borderStartColor: '#aab0ff', 
      borderEndColor: '#aab0ff',
      borderWidth: 2,
      borderTopColor: '#aab0ff',
      borderBottomColor: '#aab0ff'

    },  
    desc: {
      fontSize:getActualFontSize(16, fontSizeType),
      backgroundColor: '#563130',
      width: 90,
      color: '#ffffff',
      textAlign: 'center',
      padding: 6,
      borderRadius: 30


    },
    dateTime: {
      fontSize:getActualFontSize(16, fontSizeType),
      backgroundColor: '#f0f0ff',
      padding: 3,
      width: 160,
      textAlign: 'center',
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      borderTopRightRadius: -30,
      fontWeight: '900',
      color: '#008060',
      letterSpacing: 1.2

    },
    temp: {
      fontSize: getActualFontSize(isLandscape ? 70 : 60, fontSizeType),
      padding: 0,
      textAlign: isLandscape ? 'center' : 'right',
      fontWeight: '800',
      color: '#2f2f45'
    },
    image: {
      width: getActualFontSize(isLandscape ? 70 : 60, fontSizeType),
      height: getActualFontSize(isLandscape ? 70 : 60, fontSizeType), 
      padding: 0,
      margin: 0
  
    }
  });

  return dynamicStyles;
};
