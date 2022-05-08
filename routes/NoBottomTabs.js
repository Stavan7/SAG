import React, { Component } from 'react';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class NoBottomTabs extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="EventsDetail"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="EventsDetail"
                    component={EventDetailsScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
}

export default NoBottomTabs;