import React, { Component } from 'react';
import {
    ScrollView,
    SafeAreaView,
} from 'react-native';
import COLORS from '../constants/colors';
import Qr from '../components/Contact/Qr';
import Header from "../components/Header";
import Email from '../components/Contact/Email';
import Socials from '../components/Contact/Socials';
import { ScaledSheet } from 'react-native-size-matters';
import Payment from '../components/Contact/Payment';

class Contact extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Header heading="Contact Us" />
                    <Payment />
                    <Qr />
                    <Socials />
                    <Email />
                </ScrollView>
            </SafeAreaView>
        );
    };
};

const styles = ScaledSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: COLORS.WHITE
    }
});

export default Contact;