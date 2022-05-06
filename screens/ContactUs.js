import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import data from '../data/data';
import Swiper from 'react-native-swiper'; 
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
        borderRadius: 10,
        resizeMode: 'cover'
    },
});

export default ContactUs;