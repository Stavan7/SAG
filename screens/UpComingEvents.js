import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

const UpComingEventsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>No Upcoming Events</Text>
                <Text style={styles.subtitle}>Stay Tuned !</Text>
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
        color: 'black',
        fontFamily: 'PTSerif-Bold'
    },
    subtitle: {
        fontSize: '21@ms',
        color: '#086f23',
        fontFamily: 'PTSerif-Bold'
    },
    footer: {
        position: 'absolute',
        fontSize: '14@ms',
        bottom: '10@vs',
        color: '#000',
        marginHorizontal: '20@ms',
        textDecorationLine: 'underline',
        fontFamily: 'PTSerif-Regular'
    }
})

export default UpComingEventsScreen