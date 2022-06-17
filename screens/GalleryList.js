import React from 'react'
import {
    Text,
    View,
    FlatList, 
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import data from '../data/data';
import Header from "../components/header";
import FastImage from 'react-native-fast-image';
import { ScaledSheet } from 'react-native-size-matters';

const events = data.PastEvents;

const GalleryList = ({ navigation }) => {


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                key={item.id}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('NoBottomTab', {
                    screen: 'Gallery',
                    params: item
                })}>
                <View style={styles.eventContainer}>
                    <FastImage
                        source={item.gallery}
                        style={styles.carousel}
                        resizeMethod="scale"
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header heading="Gallery" />
            <FlatList
                data={events}
                initialNumToRender={10}
                renderItem={renderItem}
            />
        </SafeAreaView >
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1, 
        marginBottom: '70@ms',
        backgroundColor: 'transparent'
    },
    eventContainer: {
        height: '120@vs',
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
        shadowColor: 'black',
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
        backgroundColor: '#000',
        justifyContent: 'center',
        borderTopRightRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '17@ms',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
    date: {
        fontSize: '15@ms',
        marginTop: '10@ms',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
})

export default GalleryList