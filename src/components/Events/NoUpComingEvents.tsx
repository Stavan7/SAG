import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { ANIMATIONS } from '@utils/index';
import LottieView from 'lottie-react-native'
import { FONTS, COLORS } from '@constants/index';

const NoUpComingEvents = (): React.JSX.Element => {
    return (
        <>
            <View style={styles.textContainer}>
                <Text style={styles.title}>No Upcoming Events</Text>
                <Text style={styles.subtitle}>Stay Tuned !!</Text>
            </View>
            <View style={{ height: '70%', marginTop: 10 }}>
                <LottieView
                    loop
                    autoPlay
                    resizeMode="contain"
                    style={{ flex: 1 }}
                    source={ANIMATIONS.waiting}
                />
            </View>
            <Text style={styles.footer}>Until Then, Check Out Past Events</Text>
        </>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 20,
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD
    },
    subtitle: {
        fontSize: 20,
        color: COLORS.GREEN,
        fontFamily: FONTS.BOLD
    },
    footer: {
        position: 'absolute',
        fontSize: 14,
        bottom: 10,
        color: COLORS.BLACK,
        marginHorizontal: 20,
        textDecorationLine: 'underline',
        fontFamily: FONTS.MEDIUM
    }
})

export default NoUpComingEvents;