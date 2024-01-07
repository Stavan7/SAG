import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native';
import FONTS from '../../constants/fonts';
import { ScaledSheet } from 'react-native-size-matters';

const Qr = () => {
    return (
        <View style={styles.paymentView}>
            <Text style={styles.qrcodeText}>Scan the QR code</Text>
            <Image
                resizeMode='contain'
                style={{ height: 230 }}
                source={require('../../assets/qr-dummy.png')}
            />
        </View>
    )
}

const styles = ScaledSheet.create({
    paymentView: {
        width: '62%',
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
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
    qrcodeText: {
        fontSize: '16@ms',
        color: '#000',
        textAlign: 'center',
        marginBottom: 10,
        textDecorationLine: 'underline',
        fontFamily: FONTS.BOLD,
    }
})

export default Qr