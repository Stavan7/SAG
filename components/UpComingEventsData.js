import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';

const UpComingEventsData = ({ data }) => {
    return (
        <View style={styles.container}>
            {
                data.map(data => {
                    return (
                        <View key={data.id} style={styles.textContainer}>


                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.date}>{data.date}</Text>
                            <Text style={styles.description}>{data.description}</Text>

                            <Image
                                source={require('../assets/grpImage.jpeg')}
                                style={styles.image}
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
    },
    image: {
        height: '250@ms',
        width: '100%',
        resizeMode: 'contain',
        borderRadius: moderateScale(10),
    }
})

export default UpComingEventsData;