import React from 'react';
import TabIcon from './TabIcon';
import About from '../screens/About';
import Contact from '../screens/Contact';
import EventRoutes from './EventRoutes';
import COLORS from '../constants/colors';
import GalleryList from '../screens/GalleryList';
import Community from '../screens/Community';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
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
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="ios-calendar-outline" />
                    }}
                />
                <Tab.Screen
                    name="Gallery"
                    component={GalleryList}
                    options={{
                        title: 'Gallery',
                        tabBarLabel: 'Gallery',
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="md-image-outline" />
                    }}
                />
                <Tab.Screen
                    name="Community"
                    component={Community}
                    options={{
                        title: 'Community',
                        tabBarLabel: 'Community',
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="md-people-outline" />
                    }}
                />
                <Tab.Screen
                    name="About"
                    component={About}
                    options={{
                        title: 'About',
                        tabBarLabel: 'About',
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="ios-information-circle-outline" />
                    }}
                />
                <Tab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        title: 'ContactUs',
                        tabBarLabel: 'ContactUs',
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="call-outline" />
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

const styles = ScaledSheet.create({
    shadow: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                height: 90,
            },
            android: {
                height: '62@ms',
            },
        }),
        backgroundColor: COLORS.BLACK,
    },
    dot: {
        color: COLORS.GREEN,
        fontSize: '7@ms',
        marginTop: '3@ms',
    }
});

export default BottomTabs;