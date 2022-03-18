import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Header from '../components/header';


const EventsScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Header heading="Events" />
        </SafeAreaView>

    );
};

export default EventsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
});
