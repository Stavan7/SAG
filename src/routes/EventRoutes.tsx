import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Events, PastEvents, UpComingEvents } from '@screens/index';

const Stack = createStackNavigator();

const EventRoutes = (): React.JSX.Element => {
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

export default EventRoutes