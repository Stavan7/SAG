import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import Header from "../components/header";

class CommunityScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header heading="Community" />
                <View style={styles.header}>
                    <Text style={styles.headerText}>Meet the founders</Text>
                    <Text style={styles.headerText}>Meet the team</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        margin: 20
    },
    headerText: {
        marginBottom: 20,
        color: 'black',
        fontSize: 20,
        fontFamily: 'PTSerif-Bold',
    }
})

export default CommunityScreen;