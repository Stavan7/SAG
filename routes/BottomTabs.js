import React from 'react';
import { Text } from 'react-native';
import About from '../screens/About';
import Contact from '../screens/Contact';
import EventRoutes from './EventRoutes';
import COLORS from '../constants/colors';
import GalleryList from '../screens/GalleryList';
import Community from '../screens/Community';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScaledSheet, moderateScale } from 'react-native-size-matters'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: { ...styles.shadow },
                    tabBarIcon: ({ focused }) => {
                        const iconName = {
                            EventRoutes: 'ios-calendar-outline',
                            Gallery: 'md-image-outline',
                            About: 'ios-information-circle-outline',
                            Community: 'md-people-outline',
                            Contact: 'call-outline',
                        }[route.name]
                        return (
                            <>
                                <Ionicons
                                    name={iconName}
                                    size={moderateScale(23)}
                                    color={focused ? COLORS.BLACK : COLORS.ICONS}
                                />
                                {focused && <Text style={styles.dot}>{'\u2B24'}</Text>}
                            </>
                        )
                    }
                })}>
                <Tab.Screen name="EventRoutes" component={EventRoutes} />
                <Tab.Screen name="Gallery" component={GalleryList} />
                <Tab.Screen name="About" component={About} />
                <Tab.Screen name="Community" component={Community} />
                <Tab.Screen name="Contact" component={Contact} />
            </Tab.Navigator>
        </>
    )
}

const styles = ScaledSheet.create({
    shadow: {
        elevation: 5,
        height: '61@ms',
        shadowColor: COLORS.BLACK,
        backgroundColor: COLORS.GREEN,
    },
    dot: {
        color: '#000',
        fontSize: '7@ms',
        marginTop: '3@ms',
    }
});

export default BottomTabs;
