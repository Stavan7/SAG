import React from 'react';
import Routing from './routes/routes';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Routing />
    </NavigationContainer>
  )
}

export default App