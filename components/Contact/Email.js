import React from 'react'
import {
    View,
    Text,
    Linking,
    TouchableOpacity
} from 'react-native';
import FONTS from '../../constants/fonts';
import { ScaledSheet } from 'react-native-size-matters';

const emailUrl = 'mailto:kulkarnistavan25@gmail.com?subject=  Suggestions for SAG=body'

const Email = () => {
    return (
        <>
            <View style={styles.cardContainer}>
                <Text style={[styles.cardText, { fontFamily: FONTS.BOLD, textDecorationLine: 'underline' }]}>Gmail ID</Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL(emailUrl)}
                >
                    <Text style={styles.cardText}>kulkarnistavan25@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL(emailUrl)}
                >
                    <Text style={styles.cardText} >kulkarnistavan25@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = ScaledSheet.create({
    cardText: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 2,
        fontFamily: FONTS.MEDIUM
    },
    cardContainer: {
        height: 120,
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#94CBA0',
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    }
})

export default Email
