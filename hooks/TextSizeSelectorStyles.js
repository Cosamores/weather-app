// hooks/TextSizeSelectorStyles.js
import { useTextSize } from '../context/TextSizeContext';
import { StyleSheet } from 'react-native';

export const useDynamicStyles = () => {
  const { fontSizeType, getActualFontSize } = useTextSize();

  const dynamicStyles = StyleSheet.create({  
    
    container: {
    padding: 12
  },
  label: {
    margin: 3,
    marginBottom: 21,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: getActualFontSize(16, fontSizeType)
  },

  btnBox: {
    borderRadius: 30,

  },
  btn: {
    fontSize: getActualFontSize(16, fontSizeType),
    backgroundColor: '#56789f',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 12,
    borderRadius: 30,
    fontWeight: '600'
    
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 13,
  },
});

return dynamicStyles;
};
