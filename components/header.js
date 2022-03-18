import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from '../constants/colors';

const Header = ({ heading }) => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headingText}>{heading}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.bottomTabBg,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        margin: 20,
        ...Platform.select({
            ios: {
                height: 90,
            },
            android: {
                height: 50,
            },
        }),
    },
    headingText: {
        fontSize: 25,
        color: 'white',
        fontFamily: 'Roboto-Bold',
    },
});

export default Header;