import React, { useState } from 'react';
import { Button } from 'react-native';

const CustomButton = (props) => {
  const [ title, setTitle ] = useState('');

  
  return <Button
          title={props.title}
          
        >
    {props.children}
  </Button>
} 

export default CustomButton;