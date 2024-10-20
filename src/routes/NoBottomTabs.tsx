import React from 'react';
import { EventsDetails } from '@screens/index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const NoBottomTabs = (): React.JSX.Element => {
    return (
        <Stack.Navigator initialRouteName="EventsDetail" screenOptions={{ headerShown: false }}   >
            <Stack.Screen name="EventsDetail" component={EventsDetails} />
        </Stack.Navigator>
    )
}

export default NoBottomTabs;
