import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native'
import Header from "../components/header";
import COLORS from "../constants/colors";


class GalleryScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header heading="Our Gallery" />
                <View style={styles.container}>
                    <Text>Gallery</Text>
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


export default GalleryScreen;