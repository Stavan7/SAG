import React from 'react';
import EventRoutes from './EventRoutes';
import { StyleSheet } from 'react-native';
import AboutUsScreen from '../screens/AboutUs';
import GalleryList from '../screens/GalleryList';
import CommunityScreen from '../screens/Community';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { ...styles.shadow },
                }}>
                <Tab.Screen
                    name="EventRoutes"
                    component={EventRoutes}
                    options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="ios-calendar-outline"
                                color={focused ? '#fff' : '#757575'}
                                size={26}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Gallery"
                    component={GalleryList}
                    options={{
                        title: 'Gallery',
                        tabBarLabel: 'Gallery',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="md-people-outline"
                                color={focused ? '#fff' : '#757575'}
                                size={26}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Community"
                    component={CommunityScreen}
                    options={{
                        title: 'Community',
                        tabBarLabel: 'Community',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="bulb-outline"
                                color={focused ? '#fff' : '#757575'}
                                size={26}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="AboutUs"
                    component={AboutUsScreen}
                    options={{
                        title: 'AboutUs',
                        tabBarLabel: 'AboutUs',
                        tabBarIcon: ({ focused }) => (
                            <Feather
                                name="phone-call"
                                color={focused ? '#fff' : '#757575'}
                                size={26}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

const styles = StyleSheet.create({
    shadow: {
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        ...Platform.select({
            ios: {
                height: 90,
            },
            android: {
                height: 80,
            },
        }),
        backgroundColor: '#000',
    },
});

export default BottomTabs;