import React from "react";
import FONTS from "../constants/fonts";
import {
    Text,
    FlatList,
    SafeAreaView
} from 'react-native';
import data from "../data/data";
import COLORS from '../constants/colors';
import Header from "../components/Header";
import Founders from "../components/Founders";
import { ScaledSheet } from 'react-native-size-matters';

const founders = data.Founders

const Community = () => {
    return (
        <SafeAreaView style={styles.background}>
            <Header heading="Community" />
            <Text style={styles.headerText}>Meet Our Founders</Text>
            <FlatList
                data={founders}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => <Founders item={item} index={index} />}
            />
        </SafeAreaView>
    )
}

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    headerText: {
        fontSize: '20@ms',
        marginLeft: '20@ms',
        color: COLORS.GREEN,
        marginBottom: '10@ms',
        fontFamily: FONTS.BOLD,
    },
})

export default Community
