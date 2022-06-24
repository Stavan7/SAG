import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    Dimensions,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import data from '../data/data';
import Header from "../components/header";
import { Avatar } from 'react-native-elements';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import COLORS from '../constants/colors';

const swiper = data.ContactUsSwiper;
const HEIGHT = Dimensions.get('screen').height;

class ContactUsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <Header heading="Contact Us" />
                <ScrollView showsVerticalScrollIndicator={false} >

                    <Text style={styles.linkHeader}>Payment Links</Text>

                    <View style={styles.paymentView}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.upi}>UPI</Text>
                                <Text style={styles.upilinks} selectable>johndoe25@okaxis.com</Text>
                                <Text style={styles.upilinks} selectable>johndoe25@okaxis.com</Text>
                            </View>
                            <Image source={require('../assets/UPI.png')} style={styles.upiImage} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.upi}>Gpay</Text>
                                <Text style={styles.upilinks} selectable>9987654321</Text>
                                <Text style={styles.upilinks} selectable>9987654321</Text>
                            </View>
                            <Image source={require('../assets/Gpay.png')} style={styles.upiImage} />
                        </View>
                    </View>

                    <View style={[styles.paymentView, { paddingVertical: moderateScale(20) }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require('../assets/qr-dummy.png')} style={styles.qrcode} />
                            <Text style={styles.qrcodeText}>Scan the QR code to continue with the payment </Text>
                        </View>
                    </View>

                    <Text style={styles.linkHeader}>Social Media Links</Text>
                    <View style={{
                        flexDirection: 'row',
                        marginHorizontal: moderateScale(20),
                        justifyContent: 'space-around',
                        borderWidth: 1,
                        borderColor: 'black',
                        width: '50%',
                        alignSelf: 'flex-start',
                        backgroundColor: 'black',
                        borderRadius: moderateScale(10),
                        marginBottom: moderateScale(20),
                    }}>
                        <Avatar
                            size="medium"
                            icon={{ name: 'whatsapp', color: '#086f23', type: 'font-awesome' }}
                            onPress={() => Linking.openURL('https://google.com')}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="medium"
                            icon={{ name: 'instagram', color: '#086f23', type: 'font-awesome' }}
                            onPress={() => Linking.openURL('https://instagram.com/social_army_group?igshid=YmMyMTA2M2Y=')}
                            activeOpacity={0.7}
                        />
                        <Avatar
                            size="medium"
                            icon={{ name: 'facebook-f', color: '#086f23', type: 'font-awesome' }}
                            onPress={() => Linking.openURL('https://www.facebook.com/social_army_group-103076275246248/')}
                            activeOpacity={0.7}
                        />
                    </View>


                    <Text style={styles.linkHeader}>Write to us at</Text>
                    <View style={styles.emailView}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('mailto:kulkarnistavan25@gmail.com?subject=  Suggestions for SAG=body')}
                            activeOpacity={0.7}>
                            <Text style={styles.mailid} >kulkarnistavan25@gmail.com</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => Linking.openURL('mailto:kulkarnistavan25@gmail.com?subject=  Suggestions for SAG=body')}>
                            <Text style={styles.mailid} >kulkarnistavan25@gmail.com</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    };
};

const styles = ScaledSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: COLORS.WHITE
    },
    paymentView: {
        flex: 1,
        width: '90%',
        height: HEIGHT / 4.1,
        marginBottom: '20@ms',
        alignSelf: 'center',
        borderRadius: '10@ms',
        backgroundColor: COLORS.BLACK,
        paddingHorizontal: '20@ms',
        paddingVertical: '10@ms',
        elevation: 23,
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        shadowColor: COLORS.GREEN,
        borderRadius: '10@ms'
    },
    upiImage: {
        height: '45@vs',
        width: '90@s',
        marginLeft: '20@ms',
        resizeMode: 'cover',
        borderRadius: '10@ms',
        alignSelf: 'center'
    },
    linkHeader: {
        marginBottom: '10@ms',
        color: COLORS.BLACK,
        fontSize: '18@ms',
        textAlign: "left",
        marginHorizontal: '20@ms',
        fontFamily: 'PTSerif-Bold',
    },
    upi: {
        marginVertical: '3@ms',
        color: COLORS.GREEN,
        fontSize: '17@ms',
        fontFamily: 'PTSerif-Bold',
    },
    upilinks: {
        color: COLORS.WHITE,
        fontSize: '14@ms',
        marginVertical: '5@ms',
        fontFamily: 'PTSerif-Regular',
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
        fontFamily: 'PTSerif-Bold',
        textAlignVertical: 'center',
    },
    mailContainer: {
        color: COLORS.BLACK,
        fontSize: '17@ms',
        marginVertical: '10@ms',
        fontFamily: 'PTSerif-Bold',
    },
    mailid: {
        color: COLORS.BLACK,
        fontSize: '16@ms',
        marginBottom: '10@ms',
        textDecorationLine: 'underline',
        fontFamily: 'PTSerif-Regular',

    },
    emailView: {
        marginHorizontal: '20@ms',
        marginBottom: '20@ms',
    }
});

export default ContactUsScreen;