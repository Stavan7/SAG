import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import Routing from './routes/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  )
}

export default App