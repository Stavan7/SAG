import React, { Component } from 'react';
import Events from '../screens/Events/Events';
import PastEvents from '../screens/Events/PastEvents';
import { createStackNavigator } from '@react-navigation/stack';
import UpComingEvents from '../screens/Events//UpComingEvents';

const Stack = createStackNavigator();

export class EventRoutes extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName="EventsScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Events"
                    component={Events}
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