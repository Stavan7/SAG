import React from 'react';
import COLORS from '../constants/colors';
import { StyleSheet } from 'react-native';
import EventsScreen from '../screens/Events';
import GalleryScreen from '../screens/Gallery';
import AboutUsScreen from '../screens/AboutUs';
import CommunityScreen from '../screens/Community';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Routing = () => {
    return (
        <>

            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { ...styles.shadow },
                }}>
                <Tab.Screen
                    name="Events"
                    component={EventsScreen}
                    options={{
                        tabBarLabel: 'Events',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="ios-calendar-outline"
                                color={focused ? COLORS.bottomTabBg : '#000'}
                                size={30}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Gallery"
                    component={GalleryScreen}
                    options={{
                        title: 'Gallery',
                        tabBarLabel: 'Gallery',
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                                name="md-people-outline"
                                color={focused ? COLORS.bottomTabBg : '#000'}
                                size={30}
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
                                color={focused ? COLORS.bottomTabBg : '#000'}
                                size={30}
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
                                color={focused ? COLORS.bottomTabBg : '#000'}
                                size={30}
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
                height: 70,
            },
        }),
    },
});

export default Routing;