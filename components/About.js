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

                <View style={styles.swiperView}>
                    <Swiper
                        autoplay
                        bounces={true}
                        autoplayTimeout={3.5}
                        showsPagination={true}
                        autoplayDirection={true}
                        removeClippedSubviews={true}
                        automaticallyAdjustContentInsets={true}
                        dot={<View style={styles.dot}></View>}
                        activeDot={<View style={styles.activeDot}></View>}
                    >
                        {
                            content.map(data => {
                                return (
                                    <View style={styles.card} key={data.id}>
                                        <Text style={styles.header}>{data.header} : </Text>
                                        <Text style={styles.about}>{data.content}</Text>
                                    </View>
                                )
                            })
                        }
                    </Swiper>
                </View>
            </SafeAreaView>
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textContainer: {
        width: '88%',
        alignSelf: 'center',
    },
    header: {
        fontSize: 23,
        color: 'white',
        fontFamily: 'PTSerif-Bold'
    },
    about: {
        fontSize: 18,
        marginTop: 10,
        color: 'white',
        textAlign: "justify",
        fontFamily: 'PTSerif-Regular'
    },
    card: {
        flex: 1,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#1c5232',
    },
    swiperView: {
        width: '90%',
        height: '55%',
        marginTop: -20,
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: '70%',
        marginHorizontal: 5,
        backgroundColor: 'grey',
    },
    activeDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginTop: '70%',
        marginHorizontal: 5,
        backgroundColor: 'grey',
    },
})

export default About