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

const Qr = () => {
    return (
        <View style={styles.paymentView}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('../../assets/qr-dummy.png')} style={styles.qrcode} />
                <Text style={styles.qrcodeText}>Scan the QR code to continue with the payment </Text>
            </View>
        </View>
    )
}

const styles = ScaledSheet.create({
    paymentView: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
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
    qrcode: {
        height: '130@vs',
        width: '50%',
    },
    qrcodeText: {
        flex: 1,
        padding: '10@ms',
        fontSize: '15@ms',
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: FONTS.MEDIUM,
        textAlignVertical: 'center',
    },
})

export default Qr