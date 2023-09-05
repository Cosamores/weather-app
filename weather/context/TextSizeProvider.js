import React, { createContext, useState, useContext } from 'react';

const TextSizeContext = createContext('Normal');

export const TextSizeProvider = ({ children }) => {
  const [textSize, setTextSize] = useState('Normal');

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize }}>
      {children}
    </TextSizeContext.Provider>
  );
};

export const useTextSize = () => {
  return useContext(TextSizeContext);
};

export default TextSizeContext;
