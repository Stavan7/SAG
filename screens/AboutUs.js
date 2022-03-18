import React, { Component } from "react";
import {
    StyleSheet,
    SafeAreaView,
} from 'react-native'
import COLORS from "../constants/colors";
import Header from "../components/header";


class AboutUsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header heading="About Us" />
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
})


export default AboutUsScreen;