import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    Dimensions,
    SafeAreaView,
} from 'react-native';
import data from '../data/data';
import Header from "../components/header";
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const content = data.AboutUs;
const HEIGHT = Dimensions.get('screen').height;

class AboutUsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <ScrollView>
                    <Header heading="About Us" />

                    <Image
                        resizeMode="cover"
                        style={styles.image}
                        source={require('../assets/grpImage.jpeg')}
                    />
                    <View style={styles.container} >
                        {
                            content.map((data, index) => {
                                return (
                                    <View style={styles.card} key={index}>
                                        <Text style={styles.header}>{data.header} : </Text>
                                        <Text style={styles.about}>{data.content}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView >
        )
    }
}

const styles = ScaledSheet.create({
    background: {
        flex: 1,
        marginBottom: '59@ms',
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: '#000',
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20)
    },
    image: {
        height: HEIGHT / 4.0,
        width: '90%',
        marginBottom: '20@ms',
        alignSelf: 'center',
        borderRadius: '10@ms',
        resizeMode: 'cover',
    },
    header: {
        fontSize: '17@ms',
        color: 'white',
        textAlign: "justify",
        fontFamily: 'PTSerif-Bold'
    },
    about: {
        fontSize: '16@ms',
        color: 'white',
        marginTop: '10@ms',
        fontFamily: 'PTSerif-Regular'
    },
    card: {
        flex: 1,
        padding: '20@ms',
    },
})

export default AboutUsScreen