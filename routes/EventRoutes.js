import React, { Component } from 'react';
import EventsScreen from '../screens/EventsScreen';
import PastEvents from '../screens/PastEvents';
import UpComingEvents from '../screens/UpComingEvents';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export class EventRoutes extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="EventsScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="EventsScreen"
                    component={EventsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="UpcomingEvents"
                    component={UpComingEvents}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PastEvents"
                    component={PastEvents}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
}

export default EventRoutes