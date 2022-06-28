import React from 'react'
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import data from '../data/data';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FastImage from 'react-native-fast-image';
import { ScaledSheet } from 'react-native-size-matters';

const events = data.Founders;

const Founders = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Meet Our Founders</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    events.map((item, index) => {
                        return (
                            <View style={styles.eventContainer} key={index}>
                                <FastImage
                                    source={{ uri: item.avatarUrl }}
                                    style={styles.carousel}
                                    resizeMethod="scale"
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.date}>{item.position}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
    },
    eventContainer: {
        flex: 1,
        height: '91%',
        width: '155@s',
        marginHorizontal: '9@ms',
    },
    carousel: {
        width: 'auto',
        height: '68%',
        borderTopLeftRadius: '10@ms',
        borderTopRightRadius: '10@ms'
    },
    textContainer: {
        flex: 1,
        padding: '10@s',
        backgroundColor: COLORS.BLACK,
        justifyContent: 'center',
        borderBottomLeftRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '16@ms',
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: FONTS.SEMIBOLD,
    },
    date: {
        fontSize: '14@ms',
        color: COLORS.WHITE,
        marginTop: '3@ms',
        textAlign: 'center',
        fontFamily: FONTS.SEMIBOLD,
    },
    headerText: {
        fontSize: '20@ms',
        color: COLORS.GREEN,
        marginBottom: '16@ms',
        marginLeft: '20@ms',
        fontFamily: FONTS.SEMIBOLD,
    },
})

export default Founders