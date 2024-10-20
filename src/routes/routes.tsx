import React from 'react';
import BottomTabs from './BottomTabs';
import NoBottomTabs from './NoBottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Routing = (): React.JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="BottomTabs"
                screenOptions={{ headerShown: false }}>
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
        </NavigationContainer>
    )
}

export default Routing
