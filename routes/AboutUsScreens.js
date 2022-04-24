import React, { Component } from 'react';
import About from '../components/About';
import ContactUs from '../screens/ContactUs';
import AboutUsScreen from '../screens/AboutUs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export class AboutUsScreens extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="AboutUsScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="AboutUsScreen"
                    component={AboutUsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutUsSegment"
                    component={About}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ContactUs"
                    component={ContactUs}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
}

export default AboutUsScreens