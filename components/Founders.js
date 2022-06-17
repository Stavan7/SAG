import React from 'react'
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import data from '../data/data';
import FastImage from 'react-native-fast-image';
import { ScaledSheet } from 'react-native-size-matters';

const events = data.Founders;

const Founders = () => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Meet Our Founders</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}>
                {
                    events.map((item, index) => {
                        return (
                            <View style={styles.eventContainer} key={index}>
                                <FastImage
                                    source={{ uri: item.avatarUrl }}
                                    style={styles.carousel}
                                    resizeMethod="scale"
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.date}>{item.position}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    eventContainer: {
        height: '230@ms',
        width: '170@ms',
        marginHorizontal: '9@ms', 
    },
    carousel: {
        width: 'auto',
        height: '70%',
        borderTopLeftRadius: '10@ms',
        borderTopRightRadius: '10@ms'
    },
    textContainer: {
        flex: 1,
        padding: '10@s',
        backgroundColor: '#000',
        justifyContent: 'center',
        borderBottomLeftRadius: '10@ms',
        borderBottomRightRadius: '10@ms',
    },
    title: {
        fontSize: '17@ms',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
    date: {
        fontSize: '14@ms',
        marginTop: '8@ms',
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'PTSerif-Bold'
    },
    headerText: {
        fontSize: '20@ms',
        color: '#086f23',
        marginBottom: '25@ms',
        marginLeft: '20@ms',
        fontFamily: 'PTSerif-Bold',
    },
})

export default Founders