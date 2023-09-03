import React from 'react'
import {
    View,
    Text, 
    SafeAreaView,
} from 'react-native';
import FONTS from '../../constants/fonts'; 
import { ScaledSheet } from 'react-native-size-matters'; 

const Payment = () => {
    return (
        <SafeAreaView >
            <View style={styles.cardContainer}>
                <Text style={[styles.cardText, { fontFamily: FONTS.BOLD, textDecorationLine: 'underline' }]}>UPI ID</Text>
                <Text style={styles.cardText}>johndoe25@okaxis.com</Text>
                <Text style={styles.cardText}>johndoe25@okaxis.com</Text>
            </View>

            <View style={styles.cardContainer}>
                <Text style={[styles.cardText, { fontFamily: FONTS.BOLD, textDecorationLine: 'underline' }]}>UPI Phone Numbers</Text>
                <Text style={styles.cardText}>johndoe25@okaxis.com</Text>
                <Text style={styles.cardText}>johndoe25@okaxis.com</Text>
            </View>
        </SafeAreaView>
    )
}

export default Payment

const styles = ScaledSheet.create({
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
    },
    cardText: {
        fontSize: 16,
        color: '#000',
        paddingVertical: 2,
        fontFamily: FONTS.MEDIUM
    }
})