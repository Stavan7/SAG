import React, { Component } from "react";
import {
    StyleSheet,
    SafeAreaView
} from 'react-native'
import Header from "../components/header";


class GalleryScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header heading="Gallery" />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default GalleryScreen;