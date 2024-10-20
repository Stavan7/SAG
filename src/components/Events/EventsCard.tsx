import React from 'react'
import {
    Text,
    View,
    Alert,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { shadow } from '@utils/index';
import { COLORS, FONTS } from '@constants/index';
import FastImage from 'react-native-fast-image'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface CardProps {
    item: {
        date: string;
        title: string;
        cardImage: string;
        short_description: string

    };
    description?: boolean
}

const EventsCard: React.FC<CardProps> = ({ item, description }) => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const handleNavigation = () => {
        if (description) {
            navigation.navigate('NoBottomTab', { screen: 'EventsDetail', params: item })
            return;
        }

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

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleNavigation()}>
            <View style={[styles.eventContainer, shadow]}>
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
                    {description && <Text style={styles.description} numberOfLines={1} >{item.short_description}</Text>}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    eventContainer: {
        height: 95,
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 12,
        borderColor: 'transparent',
        backgroundColor: COLORS.WHITE,
    },
    imageContainer: {
        margin: 10,
        width: '32%',
        overflow: 'visible',
        borderRadius: 10,
        backgroundColor: COLORS.GREEN,
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
        padding: 8,
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    title: {
        fontSize: 16,
        color: COLORS.BLACK,
        textAlign: 'left',
        fontFamily: FONTS.BOLD,
    },
    date: {
        textAlign: 'left',
        fontSize: 14,
        marginTop: 5,
        color: COLORS.BLACK,
        fontFamily: FONTS.BOLD
    },
    description: {
        fontSize: 14,
        marginTop: 5,
        textAlign: 'left',
        lineHeight: 20,
        color: COLORS.BLACK,
        fontFamily: FONTS.MEDIUM
    }
})


export default EventsCard
