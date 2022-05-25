import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Linking,
    StyleSheet,
} from 'react-native';
import data from '../data/data';
import Swiper from 'react-native-swiper';
import { Avatar } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const swiper = data.ContactUsSwiper;

class ContactUs extends Component {
    render() {
        return (
            <SafeAreaProvider style={styles.safeArea}>
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
                <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
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

                    <LinearGradient
                        colors={['#166d3b', '#233329']} style={{ borderRadius: 35 }}>
                        <Avatar
                            size="large"
                            icon={{ name: 'envelope-o', color: 'white', type: 'font-awesome' }}
                            onPress={() => Linking.openURL('mailto: kulkarnistavan25@gmail.com')}
                            activeOpacity={0.7}
                        />
                    </LinearGradient>
                </View>

            </SafeAreaProvider>
        );
    };
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
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
    links: {
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: '#1c5232',
    },
    linkHeader: {
        marginBottom: 20,
        color: 'black',
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'PTSerif-Bold',
    },
    linkContent: {
        marginVertical: 5,
        color: 'white',
        fontSize: 16,
        fontFamily: 'PTSerif-Regular',
    }
});

export default ContactUs;