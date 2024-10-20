import React from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    ImageBackground
} from 'react-native'
import data from '@data/data'
import Swiper from 'react-native-swiper'
import { IMAGES } from '@utils/nomenclature'
import { COLORS, FONTS } from '@constants/index'

const content = data.AboutUs;
const SwiperImages = () => <Image source={IMAGES.grpImage} style={styles.swiperImage} />

const About = (): React.JSX.Element => {
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
                        <SwiperImages />
                        <SwiperImages />
                        <SwiperImages />
                    </Swiper>
                    <View style={{ padding: 20 }} >
                        {
                            content.map((data, index) => {
                                const lastItem = data.id === 4
                                return (
                                    <View key={data.content}>
                                        <Text style={[styles.header, { textAlign: index % 2 === 0 ? 'left' : 'right' }]}>{data.header}</Text>
                                        <Text style={[styles.about, {
                                            textAlign: index % 2 === 0 || lastItem ? 'left' : 'right',
                                            marginLeft: lastItem ? 40 : 0
                                        }]}>{data.content}</Text>
                                        {
                                            !lastItem &&
                                            <Image
                                                style={{ marginVertical: 10, alignSelf: 'center' }}
                                                source={require('../assets/aboutUsBg.png')}
                                            />
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

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    title: {
        fontSize: 30,
        color: '#000',
        marginTop: -50,
        textAlign: 'center',
        fontFamily: FONTS.BOLD
    },
    header: {
        fontSize: 25,
        textAlign: "justify",
        marginVertical: 10,
        color: COLORS.BLACK,
        fontFamily: FONTS.SEMIBOLD
    },
    about: {
        fontSize: 16,
        marginTop: 5,
        lineHeight: 35,
        marginBottom: 10,
        color: COLORS.BLACK,
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
