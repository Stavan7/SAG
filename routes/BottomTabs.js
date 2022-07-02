import React from 'react';
import { Text } from 'react-native';
import EventRoutes from './EventRoutes';
import COLORS from '../constants/colors';
import GalleryList from '../screens/GalleryList';
import CommunityScreen from '../screens/Community';
import AboutUsScreen from '../screens/AboutUsScreen';
import Feather from 'react-native-vector-icons/Feather';
import ContactUsScreen from '../screens/ContactUsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <>
                                    <Ionicons
                                        name="ios-calendar-outline"
                                        color={COLORS.WHITE}
                                        size={moderateScale(23)}
                                    />
                                    <Text style={styles.dot}>{'\u2B24'}</Text>
                                </>
                            ) : (
                                <Ionicons
                                    name="ios-calendar-outline"
                                    color={COLORS.ICONS}
                                    size={moderateScale(23)}
                                />
                            )
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
                            focused ? (
                                <>
                                    <Ionicons
                                        name="md-image-outline"
                                        color={COLORS.WHITE}
                                        size={moderateScale(23)}
                                    />
                                    <Text style={styles.dot}>{'\u2B24'}</Text>
                                </>
                            ) : (
                                <Ionicons
                                    name="md-image-outline"
                                    color={COLORS.ICONS}
                                    size={moderateScale(23)}
                                />
                            )
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
                            focused ? (
                                <>
                                    <Ionicons
                                        name="md-people-outline"
                                        color={COLORS.WHITE}
                                        size={moderateScale(23)}
                                    />
                                    <Text style={styles.dot}>{'\u2B24'}</Text>
                                </>
                            ) : (
                                <Ionicons
                                    name="md-people-outline"
                                    color={COLORS.ICONS}
                                    size={moderateScale(23)}
                                />
                            )
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
                            focused ? (
                                <>
                                    <Ionicons
                                        name="ios-information-circle-outline"
                                        color={COLORS.WHITE}
                                        size={moderateScale(23)}
                                    />
                                    <Text style={styles.dot}>{'\u2B24'}</Text>

                                </>
                            ) : (
                                <Ionicons
                                    name="ios-information-circle-outline"
                                    color={COLORS.ICONS}
                                    size={moderateScale(23)}
                                />
                            )
                        )
                    }}
                />
                <Tab.Screen
                    name="ContactUs"
                    component={ContactUsScreen}
                    options={{
                        title: 'ContactUs',
                        tabBarLabel: 'ContactUs',
                        tabBarIcon: ({ focused }) => (
                            focused ? (
                                <>
                                    <Feather
                                        name="phone-call"
                                        color={COLORS.WHITE}
                                        size={moderateScale(23)}
                                    />
                                    <Text style={styles.dot}>{'\u2B24'}</Text>

                                </>
                            ) : (
                                <Feather
                                    name="phone-call"
                                    color={COLORS.ICONS}
                                    size={moderateScale(23)}
                                />
                            )
                        )
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