import React, { Component } from 'react';
import BottomTabs from './BottomTabs';
import NoBottomTabs from './NoBottomTabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export class Routing extends Component {
    render() {
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
}

export default Routing