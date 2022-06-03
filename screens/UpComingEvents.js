import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import LottieView from 'lottie-react-native';

class UpComingEventsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <LottieView
                    loop
                    autoPlay
                    style={styles.image}
                    source={require('../assets/lottieAnimations/cycling.json')} />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    image: {
        height: 350,
        width: '90%',
        marginVertical: 20,
    },
})

export default UpComingEventsScreen