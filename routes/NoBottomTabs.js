import React, { Component } from 'react';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import GalleryScreen from '../components/Gallery';
import GalleryImages from '../components/GalleryImages';
import GalleryVideos from '../components/GalleryVideos';

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
                <Stack.Screen
                    name="Gallery"
                    component={GalleryScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Images"
                    component={GalleryImages}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Videos"
                    component={GalleryVideos}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        )
    }
}

export default NoBottomTabs;