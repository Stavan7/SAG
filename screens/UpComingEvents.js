import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import LottieView from 'lottie-react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

const UpComingEventsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>No Upcoming Events</Text>
                <Text style={styles.subtitle}>Stay Tuned !!</Text>
            </View>
            <View style={{ height: '70%', marginTop: verticalScale(10), }}>
                <LottieView
                    resizeMode="contain"
                    loop
                    autoPlay
                    source={require('../assets/lottieAnimations/waiting.json')}
                />
            </View>
            <Text style={styles.footer}>Until Then, Check Out Past Events</Text>
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginBottom: '61@ms',
        backgroundColor: 'transparent'
    },
    textContainer: {
        marginTop: '20@ms',
        marginHorizontal: '20@s'
    },
    title: {
        fontSize: '21@ms',
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD
    },
    subtitle: {
        fontSize: '21@ms',
        color: COLORS.GREEN,
        fontFamily: FONTS.SEMIBOLD
    },
    footer: {
        position: 'absolute',
        fontSize: '14@ms',
        bottom: '10@vs',
        color: COLORS.BLACK,
        marginHorizontal: '20@ms',
        textDecorationLine: 'underline',
        fontFamily: FONTS.REGULAR
    }
})

export default UpComingEventsScreen