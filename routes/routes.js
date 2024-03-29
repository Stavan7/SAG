import React from 'react';
import BottomTabs from './BottomTabs';
import NoBottomTabs from './NoBottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routing = () => {
    return (
        <Stack.Navigator
            initialRouteName="BottomTabs"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="BottomTabs"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NoBottomTab"
                component={NoBottomTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Routing
