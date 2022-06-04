import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import data from '../data/data';
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const events = data.PastEvents;

const PastEventsScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    events.map(event => {
                        return (
                            <TouchableOpacity
                                key={event.id}
                                activeOpacity={0.8}
                                onPress={() => navigation.navigate('NoBottomTab', { screen: 'EventsDetail', params: event })}>
                                <View style={styles.eventContainer}>
                                    <FastImage
                                        source={event.image}
                                        style={styles.carousel}
                                    />
                                    <LinearGradient colors={['#000', '#000']} style={styles.textContainer}>
                                        <Text style={styles.title} numberOfLines={2}>{event.title}</Text>
                                        <Text style={styles.date}>{event.date}</Text>
                                        <Text style={styles.description} numberOfLines={3} >{event.description}</Text>
                                    </LinearGradient>
                                </View>
                            </TouchableOpacity>

                        )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginBottom: 80,
    },
    eventContainer: {
        height: 200,
        borderRadius: 16,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        elevation: 23,
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        borderColor: 'transparent',
        backgroundColor: '#fff',
        shadowColor: 'black',
    },
    carousel: {
        width: '41%',
        height: 'auto',
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
    },
    textContainer: {
        flex: 1,
        padding: 10, 
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
    },
    title: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'left',
        fontFamily: 'PTSerif-Bold'
    },
    date: {
        fontSize: 16,
        marginTop: 10,
        color: '#FFF',
        textAlign: 'left',
        fontFamily: 'PTSerif-Bold'
    },
    description: {
        fontSize: 16,
        marginTop: 20,
        color: '#FFF',
        textAlign: 'left',
        fontFamily: 'PTSerif-Regular'
    },
    tag: {
        color: 'white',
        marginTop: 10,
        fontSize: 13,
        fontFamily: 'PTSerif-Regular',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'white',
        padding: 5
    }
})

export default PastEventsScreen