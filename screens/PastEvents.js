import React from 'react'
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import data from '../data/data';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import FastImage from 'react-native-fast-image'
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';

const events = data.PastEvents;

const PastEventsScreen = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('NoBottomTab', { screen: 'EventsDetail', params: item })}>
                <View style={styles.eventContainer}>
                    <FastImage
                        source={item.image}
                        style={styles.carousel}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                        <Text style={styles.description} numberOfLines={3} >{item.shortDescription}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={events}
                initialNumToRender={10}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView >
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        marginTop: '20@ms',
        marginBottom: '59@ms',
        backgroundColor: 'transparent'
    },
    eventContainer: {
        height: '160@vs',
        marginVertical: '10@ms',
        marginHorizontal: '20@ms',
        flexDirection: 'row',
        elevation: 23,
        shadowOffset: {
            width: 0,
            height: '11@vs',
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        backgroundColor: '#fff',
        shadowColor: COLORS.BLACK,
        borderRadius: '10@ms'
    },
    carousel: {
        width: '41%',
        height: 'auto',
        borderTopLeftRadius: '10@ms',
        borderBottomLeftRadius: '10@ms'
    },
    textContainer: {
        flex: 1,
        padding: '10@s',
        backgroundColor: COLORS.BLACK,
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '17@ms',
        color: COLORS.WHITE,
        textAlign: 'left',
        fontFamily: FONTS.SEMIBOLD,  
      
    },
    date: {
        fontSize: '15@ms',
        marginTop: '8@ms',
        color: COLORS.WHITE,
        textAlign: 'left',
        fontFamily: FONTS.SEMIBOLD
    },
    description: {
        fontSize: '13@ms',
        marginTop: '10@ms',
        color: COLORS.WHITE,
        textAlign: 'left',
        lineHeight: '20@ms',
        fontFamily: FONTS.MEDIUM
    },
})

export default PastEventsScreen