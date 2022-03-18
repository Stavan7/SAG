import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import data from '../data/data'
import COLORS from '../constants/colors'
var width = Dimensions.get('window').width;
const swiper = data.ContactUsSwiper;

class ContactUs extends Component {
    render() {
        return (
            <SafeAreaProvider style={styles.safeArea}>
                <View>

                </View>
            </SafeAreaProvider>
        );
    };
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.screenBg
    }
});

export default ContactUs;