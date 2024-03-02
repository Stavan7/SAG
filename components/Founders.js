import React from 'react'
import { View, Text, } from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FastImage from 'react-native-fast-image';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const Founders = ({ item, index }) => {
    let oddIndex = index % 2 === 0
    return (
        <View key={index} style={[styles.container, { flexDirection: oddIndex ? 'row' : 'row-reverse' }]}>
            <FastImage
                source={item.avatarUrl}
                style={styles.image}
                resizeMode='cover'
            />
            <View style={[styles.nameContainer, {
                borderBottomRightRadius: oddIndex ? 10 : 0,
                borderTopRightRadius: oddIndex ? 10 : 0,
                borderTopLeftRadius: !oddIndex ? 10 : 0,
                borderBottomLeftRadius: !oddIndex ? 10 : 0,
            }]}>
                <Text style={styles.name}>{item.position}</Text>
                <Text style={[styles.name, { fontFamily: FONTS.MEDIUM, fontSize: moderateScale(14), marginTop: 3 }]}>{item.name}</Text>
            </View>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        marginVertical: '10@ms',
        justifyContent: 'flex-start',
        marginHorizontal: '20@ms',
        backgroundColor: COLORS.WHITE
    },
    image: {
        width: 140,
        height: 160,
        borderRadius: '10@ms',
    },
    nameContainer: {
        height: 70,
        elevation: 5,
        padding: 8,
        marginTop: 10,
        shadowColor: COLORS.BLACK,
        backgroundColor: COLORS.WHITE
    },
    name: {
        fontSize: '16@ms',
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD
    }
})

export default Founders
