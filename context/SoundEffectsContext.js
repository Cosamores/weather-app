import React, { createContext, useState, useContext } from 'react';

const SoundEffectsContext = createContext();

export const SoundEffectsProvider = ({ children }) => {
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(false);

  return (
    <SoundEffectsContext.Provider value={{ soundEffectsEnabled, setSoundEffectsEnabled }}>
      {children}
    </SoundEffectsContext.Provider>
  );
};

export const useSoundEffects = () => {
  const context = useContext(SoundEffectsContext);
  if (!context) {
    throw new Error('useSoundEffects must be used within a SoundEffectsProvider');
  }
  return context;
};
