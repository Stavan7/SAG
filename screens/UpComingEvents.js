import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import LottieView from 'lottie-react-native';

const UpComingEventsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>No Upcoming Events</Text>
                <Text style={styles.subtitle}>Stay Tuned !</Text>
            </View>
            <View style={{ height: '71%', marginTop: 10 }}>
                <LottieView
                    loop
                    autoPlay
                    source={require('../assets/lottieAnimations/waiting.json')}
                />
            </View>
            <Text style={styles.footer}>Until Then, Check Out Past Events</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 80,
        backgroundColor: 'transparent'
    },
    textContainer: {
        marginTop: 20,
        marginHorizontal: 20
    },
    title: {
        fontSize: 32,
        color: 'black',
        fontFamily: 'PTSerif-Bold'
    },
    subtitle: {
        fontSize: 32,
        color: '#086f23',
        fontFamily: 'PTSerif-Bold'
    },
    footer: {
        fontSize: 14,
        marginTop: 20,
        color: '#000',
        marginHorizontal: 20,
        textDecorationLine: 'underline',
        fontFamily: 'PTSerif-Regular'
    }
})

export default UpComingEventsScreen