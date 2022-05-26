import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import data from '../data/data';
import Swiper from 'react-native-swiper';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const swiper = data.ContactUsSwiper;

class ContactUs extends Component {
    render() {
        return (
            <SafeAreaView style={styles.safeArea}>
                <ScrollView showsVerticalScrollIndicator={false} >

                    <View style={styles.swiperView}>
                        <Swiper
                            autoplay
                            autoplayTimeout={3.5}
                            showsPagination={true}
                            autoplayDirection={true}
                            removeClippedSubviews={true}
                            automaticallyAdjustContentInsets={true}
                            dot={<View style={styles.dot}></View>}
                            activeDot={<View style={styles.activeDot}></View>}
                        >
                            {
                                swiper.map(swiper => {
                                    return (
                                        <Image
                                            source={swiper.image}
                                            style={styles.carousel}
                                            key={swiper.id}
                                        />
                                    );
                                })
                            }
                        </Swiper>
                    </View>


                    <Text style={styles.linkHeader}>Social Media Links</Text>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-evenly' }}>
                        <LinearGradient
                            colors={['#166d3b', '#233329']} style={{ borderRadius: 35 }}>
                            <Avatar
                                size="large"
                                icon={{ name: 'whatsapp', color: 'white', type: 'font-awesome' }}
                                onPress={() => Linking.openURL('https://google.com')}
                                activeOpacity={0.7}
                            />
                        </LinearGradient>

                        <LinearGradient
                            colors={['#166d3b', '#233329']} style={{ borderRadius: 35 }}>
                            <Avatar
                                size="large"
                                icon={{ name: 'instagram', color: 'white', type: 'font-awesome' }}
                                onPress={() => Linking.openURL('https://instagram.com/social_army_group?igshid=YmMyMTA2M2Y=')}
                                activeOpacity={0.7}
                            />
                        </LinearGradient>

                        <LinearGradient
                            colors={['#166d3b', '#233329']} style={{ borderRadius: 35 }}>
                            <Avatar
                                size="large"
                                icon={{ name: 'facebook-f', color: 'white', type: 'font-awesome' }}
                                onPress={() => Linking.openURL('https://www.facebook.com/social_army_group-103076275246248/')}
                                activeOpacity={0.7}
                            />
                        </LinearGradient>
                    </View>

                    <View style={styles.paymentsContainer}>
                        <Text style={styles.linkHeader}>Payment Links</Text>
                        <Text style={styles.upi}>UPI</Text>
                        <Text style={styles.upilinks} selectable>johndoe25@okaxis.com</Text>
                        <Text style={styles.upilinks} selectable>johndoe25@okaxis.com</Text>
                    </View>

                    <View style={styles.qrcodeContainer}>
                        <Image source={require('../assets/qr-dummy.png')} style={styles.qrcode} />
                        <Text style={styles.qrcodeText}>Scan the QR code to continue with the payment </Text>
                    </View>

                    <View style={{ margin: 20 }}>
                        <Text style={styles.mailContainer}>Write to us at</Text>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.upilinks} >johndoe@gmail.com</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Text style={styles.upilinks} >johndoe@gmail.com</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginBottom: 80
    },
    swiperView: {
        width: '90%',
        height: 200,
        marginVertical: 20,
        alignSelf: 'center',
        position: 'relative',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: '80%',
        marginHorizontal: 5,
        backgroundColor: 'grey',
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: '80%',
        marginHorizontal: 5,
        backgroundColor: '#fff',
    },
    carousel: {
        flex: 1,
        height: 'auto',
        width: 'auto',
        borderRadius: 16,
        resizeMode: 'cover'
    },
    linkHeader: {
        marginBottom: 20,
        color: 'black',
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'PTSerif-Bold',
    },
    paymentsContainer: {
        marginTop: 20,
        marginHorizontal: 20
    },
    upi: {
        marginBottom: 10,
        color: 'black',
        fontSize: 18,
        fontFamily: 'PTSerif-Bold',
    },
    upilinks: {
        marginBottom: 10,
        color: '#233329',
        fontSize: 16,
        textDecorationLine: 'underline',
        fontFamily: 'PTSerif-Regular',
    },
    qrcodeContainer: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    qrcode: {
        height: 230,
        width: '50%',
        resizeMode: 'contain'
    },
    qrcodeText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
        color: '#233329',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold',
        textAlignVertical: 'center',
    },
    mailContainer: {
        marginBottom: 10,
        color: 'black',
        fontSize: 18,
        fontFamily: 'PTSerif-Bold',
    },
});

export default ContactUs;