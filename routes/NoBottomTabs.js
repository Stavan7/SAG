import React from 'react';
import EventsDetails from '../screens/Events/EventsDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const NoBottomTabs = () => {
    return (
        <Stack.Navigator initialRouteName="EventsDetail" screenOptions={{ headerShown: false }}   >
            <Stack.Screen name="EventsDetail" component={EventsDetails} />
        </Stack.Navigator>
    )
}

export default NoBottomTabs;
