import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    ImageBackground
} from 'react-native';
import data from '../data/data';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Swiper from 'react-native-swiper';
import { ScaledSheet } from 'react-native-size-matters';

const content = data.AboutUs;

class About extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <ImageBackground style={{ flex: 1 }} source={require('../assets/backgrounds/bg-blob.png')}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image
                            resizeMode='cover'
                            style={{ width: '100%', height: 120 }}
                            source={require('../assets/backgrounds/aboutUs.png')}
                        />
                        <Text style={styles.title}>About Us</Text>
                        <Swiper style={styles.swiperContainer} dotColor='#757575' activeDotColor='#111'>
                            <Image source={require('../assets/grpImage.jpeg')} style={styles.swiperImage} />
                            <Image source={require('../assets/grpImage.jpeg')} style={styles.swiperImage} />
                            <Image source={require('../assets/grpImage.jpeg')} style={styles.swiperImage} />
                        </Swiper>
                        <View style={styles.container} >
                            {
                                content.map((data, index) => {
                                    const lastItem = data.id === 4
                                    return (
                                        <View key={index}>
                                            <Text style={[styles.header, { textAlign: index % 2 === 0 ? 'left' : 'right' }]}>{data.header}</Text>
                                            <Text style={[styles.about, {
                                                textAlign: index % 2 === 0 || lastItem ? 'left' : 'right',
                                                marginLeft: lastItem ? 40 : 0
                                            }]}>{data.content}</Text>
                                            {
                                                !lastItem ?
                                                    <Image style={{ marginVertical: 10, alignSelf: 'center' }} source={require('../assets/aboutUsBg.png')} />
                                                    : null
                                            }
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView >
        )
    }
}

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
        marginTop: -50,
        fontFamily: FONTS.BOLD
    },
    container: {
        padding: '20@ms',
    },
    header: {
        fontSize: '25@ms',
        textAlign: "justify",
        marginVertical: 10,
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD
    },
    about: {
        lineHeight: 35,
        fontSize: '16@ms',
        marginTop: '5@ms',
        color: COLORS.BLACK,
        marginBottom: '10@ms',
        fontFamily: FONTS.MEDIUM
    },
    swiperContainer: {
        height: 250,
        marginTop: 25,
        overflow: 'visible'
    },
    swiperImage: {
        height: 190,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        resizeMode: 'cover'
    }
})

export default About