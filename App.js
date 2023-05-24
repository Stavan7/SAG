import React, { Component } from 'react'
import Routing from './routes/routes';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }

  render() {
    return (
      <NavigationContainer>
        <Routing />
      </NavigationContainer>
    )
  }
}

export default App