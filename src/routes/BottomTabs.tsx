import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native'
import EventRoutes from './EventRoutes'
import { FONTS, COLORS } from '@constants/index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { About, Community, Contact, GalleryList } from '@screens/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabs = (): React.JSX.Element => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarShowLabel: false,
                tabBarStyle: { ...styles.shadow },
                //header styles
                headerStyle: { ...styles.header },
                headerTitleStyle: { ...styles.title },
                tabBarIcon: ({ focused }) => {
                    const iconName = {
                        EventRoutes: 'calendar-outline',
                        Gallery: 'image-outline',
                        About: 'information-circle-outline',
                        Community: 'people-outline',
                        Contact: 'call-outline',
                    }[route.name]
                    return (
                        <>
                            <Ionicons
                                size={21}
                                name={iconName}
                                color={focused ? COLORS.BLACK : COLORS.ICONS}
                            />
                            {focused && <Text style={styles.dot}>{'\u2B24'}</Text>}
                        </>
                    )
                }
            })}>
            <Tab.Screen name="EventRoutes" component={EventRoutes} options={{ headerTitle: 'Events' }} />
            <Tab.Screen name="Gallery" component={GalleryList} />
            <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
            <Tab.Screen name="Community" component={Community} options={{ headerTitle: 'Community' }} />
            <Tab.Screen name="Contact" component={Contact} options={{ headerTitle: 'Contact Us' }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        height: 55,
        elevation: 5,
        shadowColor: COLORS.BLACK,
        backgroundColor: COLORS.GREEN,
    },
    dot: {
        color: '#000',
        fontSize: 7,
        marginTop: 3,
    },
    header: {
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: COLORS.GREEN,
    },
    title: {
        fontSize: 20,
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD,
    }
});

export default BottomTabs;
