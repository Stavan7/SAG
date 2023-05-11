import React from "react";
import {
    View,
    Dimensions,
    SafeAreaView
} from 'react-native';
import COLORS from '../constants/colors';
import Header from "../components/header";
import Founders from "../components/Founders";
import { ScaledSheet } from 'react-native-size-matters';

const HEIGHT = Dimensions.get('window').height

const CommunityScreen = () => {
    return (
        <SafeAreaView style={styles.background}>
            <Header heading="Community" />
            <View style={styles.founders}>
                <Founders />
            </View>
        </SafeAreaView >
    )
}

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: COLORS.WHITE
    },
    founders: { height: HEIGHT / 2.5 },
})

export default CommunityScreen;