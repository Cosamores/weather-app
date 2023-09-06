// context/TextSizeContext.js
import React, { createContext, useState, useContext } from 'react';

const TextSizeContext = createContext();

export const useTextSize = () => {
  return useContext(TextSizeContext);
};

function getActualFontSize(baseSize, fontSizeType) {
  switch (fontSizeType) {
    case 'NORMAL':
      return baseSize;
    case 'LARGE':
      return baseSize +6;
    case 'VERY LARGE':
      return baseSize + 10;
    default:
      throw new Error(`Invalid fontSizeType: ${fontSizeType}`);
  }
}

export const TextSizeProvider = ({ children }) => {
  const [fontSizeType, setFontSizeType] = useState('NORMAL');

  const toggleFontSize = () => {
    if (fontSizeType === 'NORMAL') {
      setFontSizeType('LARGE');
    } else if (fontSizeType === 'LARGE') {
      setFontSizeType('VERY LARGE');
    } else {
      setFontSizeType('NORMAL');
    }
  };

  return (
    <TextSizeContext.Provider value={{ fontSizeType, toggleFontSize, getActualFontSize }}>
      {children}
    </TextSizeContext.Provider>
  );
};
