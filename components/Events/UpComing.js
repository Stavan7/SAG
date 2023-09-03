import React from 'react'
import {
    Text,
    View,
    Image
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import { ScaledSheet } from 'react-native-size-matters';

const UpComing = ({ data }) => {
    return (
        <View style={styles.container}>
            {
                data.map(data => {
                    return (
                        <View key={data.Id} style={styles.textContainer}>
                            <Text style={styles.title}>{data.title}</Text>
                            <Text style={styles.date}>{data.date}</Text>
                            <Text style={styles.description}>{data.description}</Text>
                            <Image
                                source={{ uri: data.image }}
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
        borderBottomLeftRadius: 5
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
        borderRadius: '10@ms',
    }
})

export default UpComing