import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import data from '../data/data';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient'

const content = data.AboutUs;

class About extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>

                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={require('../assets/grpImage.jpeg')}
                />

                <Swiper
                    autoplay
                    bounces={true}
                    autoplayTimeout={4.5}
                >
                    {
                        content.map(data => {
                            return (
                                <LinearGradient
                                    colors={['#166d3b', '#233329']} style={styles.swiperView} key={data.id}>
                                    <View style={styles.card} >
                                        <Text style={styles.header}>{data.header} : </Text>
                                        <Text style={styles.about}>{data.content}</Text>
                                    </View>
                                </LinearGradient>

                            )
                        })
                    }
                </Swiper>

            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    image: {
        height: 210,
        width: '90%',
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 20,
    },
    textContainer: {
        width: '88%',
        alignSelf: 'center',
    },
    header: {
        fontSize: 23,
        color: 'white',
        marginTop: 10,
        textAlign: "justify",
        fontFamily: 'PTSerif-Bold'
    },
    about: {
        fontSize: 18,
        marginTop: 10,
        color: 'white',
        fontFamily: 'PTSerif-Regular'
    },
    card: {
        flexGrow: 1,
        backgroundColor: '#1f462f',
        position: 'absolute',
        top: 45,
        right: -80,
        zIndex: 1,
        height: 300,
        width: '105%',
        borderRadius: 20,
        padding: 10,
        opacity: 0.98
    },
    swiperView: {
        width: '60%',
        height: '65%',
        marginTop: 20,
        marginLeft: 40,
        borderRadius: 20,
        backgroundColor: 'black',
        alignSelf: 'flex-start',
    },
})

export default About