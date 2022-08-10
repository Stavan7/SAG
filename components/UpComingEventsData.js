import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';
import data from '../data/data';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FastImage from 'react-native-fast-image'
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const upcomingevents = data.UpComingEvents;

const UpComingEventsData = () => {
    return (
        <View style={styles.container}>
            {
                upcomingevents.map(data => {
                    return (
                        <View key={data.id} style={styles.textContainer}>


                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.date}>{data.date}</Text>
                            <Text style={styles.description}>{data.description}</Text>

                            <Image
                                source={require('../assets/grpImage.jpeg')}
                                style={{
                                    height: 300, width: 'auto', borderRadius: moderateScale(10),
                                }}
                                resizeMode="cover"
                                resizeMethod="scale"
                            />
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    textContainer: {
        borderTopLeftRadius: '100@ms',
        marginHorizontal: '20@s',
        backgroundColor: COLORS.BLACK,
        padding: '20@ms',
    },
    title: {
        fontSize: '18@ms',
        marginTop: '10@ms',
        textAlign: 'center',
        color: COLORS.WHITE,
        fontFamily: FONTS.BOLD
    },
    date: {
        fontSize: '16@ms',
        marginTop: '10@ms',
        color: COLORS.WHITE,
        textAlign: 'center',
        fontFamily: FONTS.BOLD
    },
    description: {
        fontSize: '16@ms',
        marginVertical: '10@ms',
        color: COLORS.WHITE,
        textAlign: 'justify',
        fontFamily: FONTS.MEDIUM
    }
})

export default UpComingEventsData;