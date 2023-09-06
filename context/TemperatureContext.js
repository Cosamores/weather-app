import React, { createContext, useState, useContext } from 'react';

const TemperatureContext = createContext();

export const useTemperature = () => {
  return useContext(TemperatureContext);
};

export const TemperatureProvider = ({ children }) => {
  const [unit, setUnit] = useState('C');

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'C' ? 'F' : 'C'));
  };


  return (
    <TemperatureContext.Provider value={{ unit, toggleUnit }}>
      {children}{console.log(unit)}
    </TemperatureContext.Provider>
  );
};
