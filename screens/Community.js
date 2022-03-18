import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native'
import COLORS from "../constants/colors";
import Header from "../components/header";

class CommunityScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header heading="Our Community" />
                <View style={styles.container}>
                    <Text>Our Community</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.screenBg,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },

})


export default CommunityScreen;