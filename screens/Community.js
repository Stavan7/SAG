import React, { Component } from "react";
import {
    StyleSheet,
    SafeAreaView
} from 'react-native'
import Header from "../components/header";

class CommunityScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header heading="Community" />
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


export default CommunityScreen;