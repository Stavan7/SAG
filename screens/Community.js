import React from "react";
import {
    View,
    Dimensions,
    SafeAreaView
} from 'react-native';
import COLORS from '../constants/colors';
import Header from "../components/Header";
import Founders from "../components/Founders";
import { ScaledSheet } from 'react-native-size-matters';

const HEIGHT = Dimensions.get('window').height

const Community = () => {
    return (
        <SafeAreaView style={styles.background}>
            <Header heading="Community" />
            <View style={{ height: HEIGHT / 2.5 }}>
                <Founders />
            </View>
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: COLORS.WHITE
    }
})


export default Community;