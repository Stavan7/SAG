import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { shadow } from '@utils/index';
import { IMAGES } from '@utils/nomenclature';
import { ContactCard } from '@components/index';
import { COLORS, FONTS } from '@constants/index';

const Payment = (): React.JSX.Element => {
    return (
        <SafeAreaView>
            <ContactCard
                header='UPI ID'
                textOne='johndoe25@okaxis.com'
                textTwo='johndoe25@okaxis.com'
            />

            <ContactCard
                header='UPI Phone Numbers'
                textOne='9552508639@ybl'
                textTwo='9552508639@oksbi'
            />

            <View style={[styles.paymentView, shadow]}>
                <Text style={styles.qrcodeText}>Scan the QR code</Text>
                <Image source={IMAGES.qr} resizeMode='contain' style={{ height: 230 }} />
            </View>
        </SafeAreaView>
    )
}

export default Payment

const styles = StyleSheet.create({
    paymentView: {
        width: '62%',
        marginTop: 30,
        alignSelf: 'center',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        backgroundColor: COLORS.GREEN,
    },
    qrcodeText: {
        fontSize: 16,
        color: COLORS.BLACK,
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: FONTS.BOLD,
        textDecorationLine: 'underline',
    }
})