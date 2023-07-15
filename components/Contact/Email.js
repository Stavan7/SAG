import React from 'react'
import {
    View,
    Text,
    Linking,
    TouchableOpacity
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';

const emailUrl = 'mailto:kulkarnistavan25@gmail.com?subject=  Suggestions for SAG=body'

const Email = () => {
    return (
        <>
            <Text style={styles.linkHeader}>Write to us at</Text>
            <View style={styles.emailView}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL(emailUrl)}
                >
                    <Text style={styles.mailid}>kulkarnistavan25@gmail.com</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL(emailUrl)}
                >
                    <Text style={styles.mailid} >kulkarnistavan25@gmail.com</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Email

const styles = ScaledSheet.create({
    linkHeader: {
        fontSize: '18@ms',
        marginLeft: '20@ms',
        color: COLORS.BLACK,
        marginBottom: '10@ms',
        fontFamily: FONTS.BOLD
    },
    mailid: {
        fontSize: '16@ms',
        color: COLORS.BLACK,
        marginBottom: '10@ms',
        fontFamily: FONTS.MEDIUM,
        textDecorationLine: 'underline',
    },
    emailView: {
        marginBottom: '20@ms',
        marginHorizontal: '20@ms',
    }
})