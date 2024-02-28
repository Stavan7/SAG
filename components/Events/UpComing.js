import React from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';

const UpComing = ({ data }) => {
    const bgImage = require('../../assets/backgrounds/bgBlob.jpeg')
    const cardBgImage = require('../../assets/backgrounds/cardImageBg.png')
    return (
        <ImageBackground source={bgImage} resizeMode='cover' style={{ flex: 1 }} >
            <View style={styles.container}>
                {
                    data.map(data => {
                        return (
                            <View key={data.Id} style={styles.textContainer}>
                                <View style={styles.textView}>
                                    <ImageBackground source={cardBgImage} resizeMode='contain'>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: data.image }}
                                        />
                                    </ImageBackground>

                                </View>
                                <Text style={styles.title}>{data.title}</Text>
                                <Text style={styles.date}>{data.date}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </ImageBackground>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    textContainer: {
        height: 300,
        width: 320,
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 12,
        backgroundColor: '#fff',
        //shadow
        elevation: 3,
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        shadowColor: '#000'
    },
    textView: {
        margin: 16,
        borderRadius: 12,
        backgroundColor: '#94CBA0'
    },
    title: {
        fontSize: '15@ms',
        textAlign: 'center',
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD
    },
    date: {
        fontSize: '14@ms',
        marginVertical: '10@ms',
        color: COLORS.BLACK,
        textAlign: 'center',
        fontFamily: FONTS.BOLD
    },
    image: {
        height: 200,
        width: '100%',
        marginVertical: -8,
        resizeMode: 'contain',
    }
})

export default UpComing
