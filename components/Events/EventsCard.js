import React, { useContext } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/colors';
import FastImage from 'react-native-fast-image'
import { ScaledSheet } from 'react-native-size-matters';

const EventsCard = ({ navigation, item, description }) => {

    const handleNavigation = () => {
        if (description) {
            navigation.navigate('NoBottomTab', { screen: 'EventsDetail', params: item })
        } else {
            Alert.alert(
                "Sorry !",
                "Can't Access Images right now",
                [
                    {
                        text: "Cancel",
                        style: "cancel",
                    },
                ],
                { cancelable: true }
            );
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNavigation()}>
            <View style={styles.eventContainer}>
                <View style={styles.imageContainer}>
                    <FastImage
                        resizeMode='contain'
                        style={styles.image}
                        source={{ uri: item.cardImage }}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                    {
                        description &&
                        <Text style={styles.description} numberOfLines={1} >{item.shortDescription}</Text>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: '10@ms',
        marginBottom: '59@ms',
    },
    eventContainer: {
        height: '95@s',
        flexDirection: 'row',
        marginVertical: '10@ms',
        marginHorizontal: '12@ms',
        backgroundColor: '#fff',
        borderRadius: '10@ms',
        borderColor: 'transparent',
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
    imageContainer: {
        margin: 10,
        width: '32%',
        overflow: 'visible',
        borderRadius: '10@ms',
        backgroundColor: '#94CBA0',
    },
    image: {
        aspectRatio: 1,
        marginTop: -8,
        width: '140%',
        height: '124%',
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        padding: '8@s',
        justifyContent: 'center',
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '15@ms',
        color: '#000',
        textAlign: 'left',
        fontFamily: FONTS.BOLD,
    },
    date: {
        textAlign: 'left',
        fontSize: '14@ms',
        marginTop: '5@ms',
        color: '#000',
        fontFamily: FONTS.BOLD
    },
    description: {
        fontSize: '13@ms',
        marginTop: '5@ms',
        textAlign: 'left',
        lineHeight: '20@ms',
        color: '#000',
        fontFamily: FONTS.MEDIUM
    }
})


export default EventsCard