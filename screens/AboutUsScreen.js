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
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import Header from "../components/header";
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

const content = data.AboutUs;
const HEIGHT = Dimensions.get('screen').height;

class AboutUsScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                                    <View key={index}>
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
        backgroundColor: COLORS.WHITE
    },
    container: {
        padding: '20@ms',
        backgroundColor: COLORS.BLACK,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20)
    },
    image: {
        height: HEIGHT / 4.0,
        width: '90%',
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: '10@ms',
        marginBottom: '20@ms',
    },
    header: {
        fontSize: '17@ms',
        textAlign: "justify",
        color: COLORS.GREEN,
        fontFamily: FONTS.SEMIBOLD
    },
    about: {
        fontSize: '16@ms',
        marginTop: '5@ms',
        color: COLORS.WHITE,
        marginBottom: '10@ms',
        fontFamily: FONTS.MEDIUM
    },
})

export default AboutUsScreen