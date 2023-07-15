import React from 'react'
import {
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';

const HEIGHT = Dimensions.get('screen').height;

const Payment = () => {
    return (
        <>
            <Text style={styles.linkHeader}>Payment Links</Text>
            <View style={styles.paymentView}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.upi}>UPI</Text>
                        <Text style={styles.upilinks} selectable>johndoe25@okaxis.com</Text>
                        <Text style={styles.upilinks} selectable>johndoe25@okaxis.com</Text>
                    </View>
                    <Image source={require('../../assets/UPI.png')} style={styles.upiImage} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.upi}>Gpay</Text>
                        <Text style={styles.upilinks} selectable>9987654321</Text>
                        <Text style={styles.upilinks} selectable>9987654321</Text>
                    </View>
                    <Image source={require('../../assets/Gpay.png')} style={styles.upiImage} />
                </View>
            </View>
        </>
    )
}

export default Payment

const styles = ScaledSheet.create({
    linkHeader: {
        fontSize: '18@ms',
        marginLeft: '20@ms',
        color: COLORS.BLACK,
        marginBottom: '10@ms',
        fontFamily: FONTS.BOLD
    },
    paymentView: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'center',
        height: HEIGHT / 4.4,
        borderRadius: '10@ms',
        marginBottom: '10@ms',
        paddingHorizontal: '20@ms',
        elevation: 14,
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderRadius: '10@ms',
        borderColor: 'transparent',
        shadowColor: COLORS.GREEN,
        backgroundColor: COLORS.BLACK,
    },
    upiImage: {
        width: '90@s',
        height: '45@vs',
        alignSelf: 'center',
        resizeMode: 'cover',
        marginLeft: '20@ms',
        borderRadius: '10@ms',
    },
    upi: {
        fontSize: '17@ms',
        color: COLORS.GREEN,
        marginVertical: '3@ms',
        fontFamily: 'PTSerif-Bold',
    },
    upilinks: {
        fontSize: '14@ms',
        color: COLORS.WHITE,
        marginVertical: '5@ms',
        fontFamily: FONTS.MEDIUM,
    },
})