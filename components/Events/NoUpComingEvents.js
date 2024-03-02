import React from 'react'
import { View, Text, } from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import LottieView from 'lottie-react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

const NoUpComingEvents = () => {

    return (
        <>
            <View style={styles.textContainer}>
                <Text style={styles.title}>No Upcoming Events</Text>
                <Text style={styles.subtitle}>Stay Tuned !!</Text>
            </View>
            <View style={{ height: '70%', marginTop: verticalScale(10) }}>
                <LottieView
                    resizeMode="contain"
                    loop
                    autoPlay
                    source={require('../../assets/animation/waiting.json')}
                />
            </View>
            <Text style={styles.footer}>Until Then, Check Out Past Events</Text>
        </>
    )
}

const styles = ScaledSheet.create({
    textContainer: {
        marginTop: '20@ms',
        marginHorizontal: '20@s'
    },
    title: {
        fontSize: '21@ms',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD
    },
    subtitle: {
        fontSize: '21@ms',
        color: COLORS.GREEN,
        fontFamily: FONTS.BOLD
    },
    footer: {
        position: 'absolute',
        fontSize: '14@ms',
        bottom: '10@vs',
        color: COLORS.BLACK,
        marginHorizontal: '20@ms',
        textDecorationLine: 'underline',
        fontFamily: FONTS.MEDIUM
    }
})

export default NoUpComingEvents;